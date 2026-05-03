import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/index.js';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      console.log('User registered successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };


  return (
    <div>
      <div className="register-container">
        <div className="register-left">
        <img className="register-logo" src="https://workos.imgix.net/app-branding/environment_01JEA0SBX1G9DPKXMSAEPN4JNJ/01KFKMYMGDQJD8HD4RYH5TWVZ6" alt="img-logo" />
        <h2 className="register-title">Regístrate en Project Cloud</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-form-header">
              <div className="field">
                <label htmlFor="firstname">Nombre</label>
                <input required type="text" name="firstname" placeholder="Tu nombre" value={formData.firstname} onChange={handleChange} />
              </div>

              <div className="field">
                <label htmlFor="lastname">Apellido</label>
                <input required type="text" name="lastname" placeholder="Tu apellido" value={formData.lastname} onChange={handleChange} />
              </div>
            </div>

          <label htmlFor="email" className="field-label">Correo electrónico</label>
          <input required type="email" name="email" placeholder="Tu correo electrónico" value={formData.email} onChange={handleChange} />
          <label htmlFor="password" className="field-label">Contraseña</label>
          <input required type="password" name="password" placeholder="Tu contraseña" value={formData.password} onChange={handleChange} />
           <div className='form-label'>
          <label htmlFor="" >¿Ya tienes una cuenta? <Link to="/login">¡Inicia sesión aqui!</Link></label>
          </div>
          <button type="submit" className="button-register">Regístrate</button>

        </form>
         </div>

         <div className="register-image">
              <img src="https://assets.laravel.cloud/images/auth-bg.png" alt="img-background" />
            </div>

      </div>
           
    </div>
  );
}


export default Register;