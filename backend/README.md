# backend/README.md

```markdown
# Backend – Flask API

## Tech Stack & Frameworks
- Flask
- Flask-CORS
- Flask-Limiter
- bcrypt

## Features
- `/register` endpoint with validation and hashing
- `/login` endpoint with verification
- Rate limiting routes and global limits
- CORS enabled

## Setup & Usage
1. `cd backend`
2. `python3 -m venv venv`
3. `source venv/bin/activate`
4. `pip install -r requirements.txt`
5. `python app.py` (port 5001)

## Directory Structure
````

backend/ ├── app.py ├── config.py ├── models.py ├── requirements.txt └── venv/

```
```

