// CadastroProdutosForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CadastroProdutosForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    descricao: '',
    preco: '',
    quantidade: ''
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
      await axios.post('http://localhost:3001/cadastroProdutos', formData);
      alert('cadastroProdutos criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        categoria: '',
        descricao: '',
        preco: '',
        quantidade: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastroProdutos', error);
      alert('Erro ao criar cadastroProdutos. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="text" name="categoria" placeholder="Categoria" value={formData.categoria} onChange={handleChange} />
      <input type="text" name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} />
      <input type="number" name="preco" placeholder="Preço" value={formData.preco} onChange={handleChange} />
      <input type="number" name="quantidade" placeholder="Quantidade" value={formData.quantidade} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroProdutosForm;
