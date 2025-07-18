<h1>Flauth Frontend</h1>

<p>This is the React frontend for <strong>Flauth</strong>, a secure authentication system. It interacts with the Flask backend via API and provides a responsive, user-friendly interface for login, registration, and session-based navigation.</p>

<h2>📦 Tech Stack</h2>
<ul>
  <li>React (with Vite)</li>
  <li>Axios</li>
  <li>React Router DOM</li>
  <li>Vanilla CSS (custom)</li>
</ul>

<h2>📁 Project Structure</h2>
<pre><code>frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── App.jsx
│   ├── main.jsx
│   └── utils/
├── .env
├── index.html
├── package.json
└── README.md
</code></pre>

<h2>⚙️ Setup</h2>
<ol>
  <li>Navigate to the frontend folder:
    <pre><code>cd frontend</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Configure environment variables in <code>.env</code>:
    <pre><code>VITE_API_BASE_URL=http://localhost:5000</code></pre>
  </li>
  <li>Run the development server:
    <pre><code>npm run dev</code></pre>
  </li>
</ol>

<p>App runs on <code>http://localhost:5173</code></p>

<h2>🔐 Features</h2>
<ul>
  <li>Login and Register forms with validation</li>
  <li>JWT token storage and protected routes</li>
  <li>Error handling and redirection</li>
  <li>Modular components and routing</li>
</ul>

<h2>🌐 API Integration</h2>
<p>All API calls are made to the Flask backend via Axios with JWT-based authorization. The base URL is configured in <code>utils/api.js</code>.</p>

<h2>🧪 Testing</h2>
<p>Use browser dev tools to inspect JWT handling and test auth-protected flows. Backend must be running.</p>

<h2>📄 License</h2>
<p>MIT</p>
