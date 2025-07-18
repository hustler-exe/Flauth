# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from models import create_user, verify_user
from config import SECRET_KEY

app = Flask(__name__)
app.config['SECRET_KEY'] = SECRET_KEY

CORS(app, supports_credentials=True)

limiter = Limiter(get_remote_address, app=app, default_limits=["50 per minute"])

@app.route('/register', methods=['POST', 'OPTIONS'])
@limiter.limit("5 per minute")
def register():
    if request.method == 'OPTIONS':
        return jsonify({'message': 'OK'}), 200

    data = request.get_json()
    email = data.get('email', '')
    password = data.get('password', '')

    if '@' not in email:
        return jsonify({'error': 'Invalid email format'}), 400
    if not password:
        return jsonify({'error': 'Password is required'}), 400

    success, message = create_user(email, password)
    if not success:
        return jsonify({'error': message}), 400

    return jsonify({'message': message}), 200

@app.route('/login', methods=['POST', 'OPTIONS'])
@limiter.limit("5 per minute")
def login():
    if request.method == 'OPTIONS':
        return jsonify({'message': 'OK'}), 200

    data = request.get_json()
    email = data.get('email', '')
    password = data.get('password', '')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    success, message = verify_user(email, password)
    if not success:
        return jsonify({'error': message}), 401

    return jsonify({'message': message}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5001)