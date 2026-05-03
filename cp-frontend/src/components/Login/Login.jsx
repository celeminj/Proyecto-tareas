// import './Login.css';
import React, { useState } from 'react';
import { loginUser } from '../../api/index.js';
import { useNavigate } from 'react-router-dom';

export default function Login() {

   const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

    const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  
  }

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await loginUser(credentials);
        localStorage.setItem('token', response.token); // Guarda el token en localStorage
        console.log('User logged in successfully');
        console.log('Token:', response.token + "usuario: " + response.user.email + "id: " + response.user.id );
        navigate('/dashboard');
      } catch (error) {
        console.error('Error logging in user:', error);
      }
    };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} >
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu email"
            value={credentials.email}
            handleChange={handleChange}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Tu contraseña"
            value={credentials.password}
            handleChange={handleChange}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

