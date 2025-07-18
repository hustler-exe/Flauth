<h1>Flauth</h1>

<p><strong>Flauth</strong> is a secure, full-stack authentication system built using Flask for the backend and React for the frontend. It provides user registration, login, session handling, and brute-force protection using industry-standard practices.</p>

<h2>📁 Project Structure</h2>

<pre><code>.
├── backend/       # Flask server (authentication API)
├── frontend/      # React client (user interface)
├── venv/          # Python virtual environment (excluded from GitHub)
├── README.md      # Root README
└── LICENSE        # MIT License
</code></pre>

<h2>⚙️ Installation</h2>

<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/your-username/flauth.git
cd flauth</code></pre>
  </li>

  <li>Install backend dependencies:
    <pre><code>cd backend
pip install -r requirements.txt</code></pre>
  </li>

  <li>Install frontend dependencies:
    <pre><code>cd ../frontend
npm install</code></pre>
  </li>
</ol>

<h2>🚀 Running the App</h2>

<ol>
  <li>Start Flask backend:
    <pre><code>cd backend
python app.py</code></pre>
  </li>

  <li>Start React frontend:
    <pre><code>cd frontend
npm run dev</code></pre>
  </li>
</ol>

<p>The frontend runs on <code>http://localhost:5173</code> and the backend on <code>http://localhost:5000</code>.</p>

<h2>🧩 Features</h2>
<ul>
  <li>Secure password hashing (bcrypt)</li>
  <li>JWT-based authentication</li>
  <li>Brute-force protection using Flask-Limiter</li>
  <li>React frontend with protected routes</li>
</ul>

<h2>📦 Dependencies</h2>

<p><strong>Backend:</strong></p>
<ul>
  <li>Flask</li>
  <li>bcrypt</li>
  <li>flask-cors</li>
  <li>flask-limiter</li>
</ul>

<p><strong>Frontend:</strong></p>
<ul>
  <li>React</li>
  <li>Axios</li>
  <li>React Router DOM</li>
</ul>

<h2>🛡 License</h2>
<p>This project is licensed under the <a href="./LICENSE">MIT License</a>.</p>

<h2>🤝 Contributing</h2>
<p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>

<h2>🙏 Acknowledgments</h2>
<ul>
  <li>Inspired by Flask and React best practices</li>
  <li>Thanks to the open-source community</li>
</ul>
