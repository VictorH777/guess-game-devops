import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });

    const data = await res.json();

    localStorage.setItem('token', data.access_token);

    alert('Login realizado!');
  };

  const handleRegister = async () => {
    await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });

    alert('Usuário criado!');
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}

export default Login;
