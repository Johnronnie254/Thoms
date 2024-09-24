from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Initialize the Flask app and database
app = Flask(__name__)
db = SQLAlchemy()
migrate = Migrate(app, db)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

# CORS configuration
CORS(app, resources={r"/contacts": {"origins": "https://richwaysbusiness.com"}})

# Define the Contact model
class Contact(db.Model):
    __tablename__ = 'contacts'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    message = db.Column(db.String, nullable=False)

db.init_app(app)

# Route to create a new contact message
@app.route('/contacts', methods=['POST'])
def create_contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Save data to the database
    new_message = Contact(name=name, email=email, message=message)
    db.session.add(new_message)
    db.session.commit()

    # Send email
    if send_email(name, email, message):
        return jsonify({'message': 'Your message has been sent successfully'}), 201
    else:
        return jsonify({'message': 'Failed to send email'}), 500

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
        with smtplib.SMTP('mail.richwaysbusiness.com', 465) as server:
            server.starttls()  # Start TLS for security
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
            print('Email sent successfully')
            return True
    except Exception as e:
        print(f'Failed to send email: {str(e)}')
        return False

@app.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'Server is running!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
