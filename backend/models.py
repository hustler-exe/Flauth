from bcrypt import hashpw, gensalt, checkpw

# Simulated DB
users = {}

def create_user(email, password):
    if email in users:
        return False, "User already exists"
    hashed = hashpw(password.encode(), gensalt())
    users[email] = hashed
    return True, "User registered successfully"

def verify_user(email, password):
    if email not in users:
        return False, "User not found"
    if checkpw(password.encode(), users[email]):
        return True, "Login successful"
    else:
        return False, "Invalid password"