import os
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from models import db, Contact

app = Flask(__name__)

# DATABASE CONFIGURATION
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

migrate = Migrate(app, db)

# Configure CORS to allow only requests from your frontend
CORS(app, resources={r"/backend/*": {"origins": "https://richwaysbusiness.com"}})

db.init_app(app)

@app.route('/backend/contacts', methods=['POST'])
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

def send_email(name, email, message):
    sender_email = "biz@richwaysbusiness.com"
    receiver_email = "solutions@richwaysbusiness.com"
    password = "safiBiz@1"  # Use environment variables in production

    # Set up the email content
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"New Contact Message from {name}"

    body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Set up the SMTP server
        server = smtplib.SMTP('smtp.richwaysbusiness.com', 587)  # Update with your SMTP server
        server.starttls()
        server.login(sender_email, password)
        text = msg.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()
        print('Email sent successfully')
    except Exception as e:
        print(f'Failed to send email: {str(e)}')

@app.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'Server is running!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
