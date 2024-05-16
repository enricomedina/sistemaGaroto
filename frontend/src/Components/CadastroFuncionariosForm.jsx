// CadastroFuncionariosForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CadastroFuncionariosForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    genero: '',
    email: '',
    telefone: '',
    cpf: '',
    dataCadastro: '',
    cidade: '',
    cep: '',
    cargo: '',
    departamento: '',
    dataAdmissao: '',
    salario: ''
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
      await axios.post('http://localhost:3001/cadastroFuncionarios', formData);
      alert('cadastroFuncionarios criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        genero: '',
        email: '',
        telefone: '',
        cpf: '',
        dataCadastro: '',
        cidade: '',
        cep: '',
        cargo: '',
        departamento: '',
        dataAdmissao: '',
        salario: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastroFuncionarios', error);
      alert('Erro ao criar cadastroFuncionarios. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="text" name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} />
      <input type="date" name="dataNascimento" placeholder="Data de Nascimento" value={formData.dataNascimento} onChange={handleChange} />
      <input type="text" name="genero" placeholder="Gênero" value={formData.genero} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="tell" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
      <input type="cpf" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
      <input type="date" name="dataCadastro" placeholder="Data de Cadastro" value={formData.dataCadastro} onChange={handleChange} />
      <input type="text" name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange} />
      <input type="cep" name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} />
      <input type="text" name="cargo" placeholder="Cargo" value={formData.cargo} onChange={handleChange} />
      <input type="text" name="departamento" placeholder="Departamento" value={formData.departamento} onChange={handleChange} />
      <input type="date" name="dataAdmissao" placeholder="Data de Admissão" value={formData.dataAdmissao} onChange={handleChange} />
      <input type="number" name="salario" placeholder="Salário" value={formData.salario} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroFuncionariosForm;
