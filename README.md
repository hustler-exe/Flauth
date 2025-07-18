# Flauth 🔐 - Flask + React Secure Auth System

## 🧭 Project Structure
.
├── backend/     # Flask backend
├── frontend/    # React frontend
├── README.md    # Root README
└── .gitignore

## 🚀 Setup Instructions

# 1. Clone the repo
git clone https://github.com/yourusername/Flauth.git
cd Flauth

# 2. Setup Python backend
cd backend
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py              # or flask run
cd ..

# 3. Setup React frontend
cd frontend
npm install
npm run dev                # Starts Vite dev server
