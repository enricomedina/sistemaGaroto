// CadastroFornecedoresForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CadastroFornecedoresForm = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    estado: '',
    cnpj: '',
    email: '',
    telefone: '',
    segmentoAtuacao: '',
    status: ''
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
      await axios.post('http://localhost:3001/cadastroFornecedores', formData);
      alert('cadastroFornecedores criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nomeEmpresa: '',
        estado: '',
        cnpj: '',
        email: '',
        telefone: '',
        segmentoAtuacao: '',
        status: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastroFornecedores', error);
      alert('Erro ao criar cadastroFornecedores. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nomeEmpresa" placeholder="Nome da Empresa" value={formData.nomeEmpresa} onChange={handleChange} />
      <input type="text" name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} />
      <input type="number" name="cnpj" placeholder="CNPJ" value={formData.cnpj} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="tell" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
      <input type="text" name="segmentoAtuacao" placeholder="Segmento de Atuação" value={formData.segmentoAtuacao} onChange={handleChange} />
      <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroFornecedoresForm;
