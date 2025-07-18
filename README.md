# README.md (Root)

````markdown
# Secure Login System

A full-stack secure login system built with modern technologies for frontend and backend. This repository contains two distinct parts:

- **Frontend**: A React application handling user interfaces and client-side logic.
- **Backend**: A Flask API responsible for authentication, business logic, and data handling.

## Table of Contents
1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Frontend Documentation](#frontend-documentation)
6. [Backend Documentation](#backend-documentation)

---

## Overview
This project demonstrates a secure login workflow with:
- **Password Hashing** (bcrypt)
- **Rate Limiting** (Flask-Limiter)
- **CORS Support** (Flask-CORS)

---

## Tech Stack
| Layer     | Technology             | Purpose                                    |
|-----------|------------------------|--------------------------------------------|
| Frontend  | React v19              | Component-based UI                         |
|           | React Router v7        | Client-side routing                        |
|           | Axios                  | HTTP client                                |
|           | Vite                   | Build and dev tooling                      |
| Backend   | Flask                  | Python web framework                       |
|           | Flask-CORS             | Cross-origin support                       |
|           | Flask-Limiter          | Rate limiting                              |
|           | bcrypt                 | Secure password hashing                    |
| DevOps    | Git, GitHub            | Version control and hosting                |

---

## Getting Started

### Prerequisites
- Node.js (v18+) & npm
- Python 3.8+
- Git

```bash
git clone https://github.com/your-username/Secure-Login-System.git
cd Secure-Login-System
````

### Setup Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py  # runs on port 5001
```

### Setup Frontend

```bash
cd frontend
npm install
npm start  # runs on http://localhost:3000
```

---

## Project Structure

```
Secure-Login-System/
├── backend/            # Flask API (see backend/README.md)
├── frontend/           # React app (see frontend/README.md)
├── .gitignore
└── README.md           # This file
```

---

## Frontend Documentation

See: [`frontend/README.md`](./frontend/README.md)

## Backend Documentation

See: [`backend/README.md`](./backend/README.md)

````

---