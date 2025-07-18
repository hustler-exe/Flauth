<h1>Flauth Backend</h1>

<p>This is the Flask backend for <strong>Flauth</strong>, handling secure user authentication, session management, and API endpoints for the frontend.</p>

<h2>🧰 Tech Stack</h2>
<ul>
  <li>Flask</li>
  <li>bcrypt</li>
  <li>flask-cors</li>
  <li>flask-limiter</li>
  <li>JWT (JSON Web Token)</li>
</ul>

<h2>📁 Folder Structure</h2>
<pre><code>backend/
├── app.py
├── auth/
│   ├── routes.py
│   ├── models.py
│   └── utils.py
├── .env
├── requirements.txt
└── README.md
</code></pre>

<h2>⚙️ Setup</h2>
<ol>
  <li>Create a virtual environment:
    <pre><code>python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>pip install -r requirements.txt</code></pre>
  </li>
  <li>Run the server:
    <pre><code>python app.py</code></pre>
  </li>
</ol>

<h2>🔐 Features</h2>
<ul>
  <li>Secure password hashing (bcrypt)</li>
  <li>JWT token generation and verification</li>
  <li>Brute-force attack protection with Flask-Limiter</li>
  <li>Cross-origin support with Flask-CORS</li>
</ul>

<h2>📄 Environment Variables</h2>
<pre><code>SECRET_KEY=your-secret-key
JWT_EXPIRY=3600</code></pre>

<h2>📌 Endpoints</h2>
<ul>
  <li><code>POST /register</code> – Create a new user</li>
  <li><code>POST /login</code> – Authenticate user and return JWT</li>
  <li><code>GET /protected</code> – Example protected route</li>
</ul>

<h2>📄 License</h2>
<p>MIT</p>
