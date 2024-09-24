import os
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import requests  # Import requests for making HTTP calls

from models import db, Contact

app = Flask(__name__)

# DATABASE CONFIGURATION
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

migrate = Migrate(app, db)

# Configure CORS to allow requests from your frontend
CORS(app, resources={r"/contacts": {"origins": "https://richwaysbusiness.com"}})

db.init_app(app)

@app.route('/contacts', methods=['POST'])
def create_contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Save data to the database
    new_message = Contact(
        name=name,
        email=email,
        message=message,
    )
    db.session.add(new_message)
    db.session.commit()

    # Send email
    send_email(name, email, message)

    return jsonify({'message': 'Your message has been sent successfully'}), 201

@app.route('/contacts', methods=['OPTIONS'])
def options_contact():
    return jsonify({'message': 'CORS Preflight Successful'}), 200

def send_email(name, email, message):
    sender_email = "biz@richwaysbusiness.com"
    receiver_email = "solutions@richwaysbusiness.com"
    password = os.environ.get('EMAIL_PASSWORD')  # Use environment variable for security

    # Set up the email content
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"New Contact Message from {name}"

    body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Set up the SMTP server
        server = smtplib.SMTP('smtp.richwaysbusiness.com', 587)
        server.starttls()
        server.login(sender_email, password)
        text = msg.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()
        print('Email sent successfully')
    except Exception as e:
        print(f'Failed to send email: {str(e)}')

@app.route('/proxy/jokes', methods=['GET'])
def proxy_jokes():
    try:
        # Define the external API endpoint
        external_url = 'https://joke-api-strict-cors.appspot.com/jokes/random'
        
        # Make a request to the external API
        response = requests.get(external_url)

        # Check if the request was successful
        if response.status_code == 200:
            # Return the JSON response from the external API
            return jsonify(response.json()), 200
        else:
            return jsonify({'error': 'Failed to retrieve jokes'}), response.status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'Server is running!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
