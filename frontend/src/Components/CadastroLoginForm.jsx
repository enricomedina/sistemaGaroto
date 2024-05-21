import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CadastroLoginForm = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    senha: '', 
    idCadastroFuncionarios: ''
  });

  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cadastroFuncionarios');
        setFuncionarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
      }
    };

    fetchFuncionarios();
  }, []);

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
      await axios.post('http://localhost:3001/cadastroLogin', formData);
      alert('Cadastro de login criado com sucesso!');
      setFormData({
        usuario: '',
        email: '',
        senha: '',
        idCadastroFuncionarios: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro de login:', error);
      alert('Erro ao criar cadastro de login. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="usuario" placeholder="Usuário" value={formData.usuario} onChange={handleChange} />
      <input type="text" name="email" placeholder="Email:" value={formData.email} onChange={handleChange} />
      <input type="password" name="senha" placeholder="Senha:" value={formData.senha} onChange={handleChange} />

      {/* Campo de seleção para selecionar o funcionário */}
      <select name="idCadastroFuncionarios" value={formData.idCadastroFuncionarios} onChange={handleChange}>
        <option value="">Selecione um funcionário</option>
        {funcionarios.map(funcionario => (
          <option key={funcionario.idCadastroFuncionarios} value={funcionario.idCadastroFuncionarios}>
            {funcionario.nome} {funcionario.sobrenome}
          </option>
        ))}
      </select>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroLoginForm;


