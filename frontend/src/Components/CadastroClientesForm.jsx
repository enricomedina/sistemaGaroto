// CadastroClientesForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CadastroClientesForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    genero: '',
    endereco: '',
    email: '',
    telefone: '',
    cpf: '',
    dataCadastro: ''
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
      await axios.post('http://localhost:3001/cadastroClientes', formData);
      alert('cadastroClientes criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        genero: '',
        endereco: '',
        email: '',
        telefone: '',
        cpf: '',
        dataCadastro: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastroClientes ', error);
      alert('Erro ao criar cadastroClientes. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="text" name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} />
      <input type="date" name="dataNascimento" placeholder="Data de Nascimento" value={formData.dataNascimento} onChange={handleChange} />
      <input type="text" name="genero" placeholder="Gênero" value={formData.genero} onChange={handleChange} />
      <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="tell" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
      <input type="cpf" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
      <input type="date" name="dataCadastro" placeholder="Data de Cadastro" value={formData.dataCadastro} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroClientesForm;
