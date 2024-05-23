// Login
import React from 'react';
import '../css/Login.css';
import Form from 'react-bootstrap/Form';
import logoGaroto from '../images/logoGaroto.png';
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      await axios.post('http://localhost:3001/loginSistema', formData);
      alert('Login efetuado!');
      setFormData({
        email: '',
        senha: ''
      });
      // Redirecionar para a página após o login
      window.location.href = './Home'; // Substitua '/pagina_apos_login' pela URL da página para a qual deseja redirecionar após o login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao criar cadastro de login. Verifique o console para mais detalhes.', error);
    }
  };

  return (
    <div className="container">
      <div className="body d-md-flex align-items-center justify-content-between">
        <div className="box-1 mt-md-0 mt-5">
          <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        </div>

        <div className="box-2 d-flex flex-column h-100">
          <div className="mt-5">
            <img className='logoStyle' src={logoGaroto} />
            <h4 className='titulo'> Olá! Entre e explore </h4>
            <p className='subtitulo'>Acompanhe toda a gestão da sua empresa</p>

            <Form onSubmit={handleSubmit}>
              <div className="login-form">
                <input name='email' type="email" className="login-input" value={formData.email} onChange={handleChange} placeholder="E-mail" />
                <input type="password" name="senha" className="login-input" placeholder="Senha:" value={formData.senha} onChange={handleChange} />
                <button type="submit" className="login-button">Entrar</button>
              </div>
            </Form>
          </div>
          <div className="mt-auto">
            <p className="footer text-muted mb-0 mt-md-0 mt-4">Problemas para lembrar?
              <span className="p-color ms-1">Recupere sua senha </span>
            </p>
          </div>
        </div>
        <span className="fas fa-times"></span>
      </div>
    </div>
  );
}

export default Login;
