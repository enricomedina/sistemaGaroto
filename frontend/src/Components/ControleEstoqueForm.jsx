import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ControleEstoqueForm = () => {
  const [formData, setFormData] = useState({
    quantidade: '',
    dataEntrada: '',
    dataSaida: '',
    idCadastroProdutos: ''
  });

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cadastroProdutos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
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
      await axios.post('http://localhost:3001/controleEstoque', formData);
      alert('Controle de estoque criado com sucesso!');
      setFormData({
        quantidade: '',
        dataEntrada: '',
        dataSaida: '',
        idCadastroProdutos: ''
      });
    } catch (error) {
      console.error('Erro ao criar controle de estoque:', error);
      alert('Erro ao criar controle de estoque. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="quantidade" placeholder="Quantidade:" value={formData.quantidade} onChange={handleChange} />
      <input type="datetime-local" name="dataEntrada" placeholder="Data de Entrada:" value={formData.dataEntrada} onChange={handleChange} />
      <input type="datetime-local" name="dataSaida" placeholder="Data de Saída:" value={formData.dataSaida} onChange={handleChange} />
      
      {/* Campo de seleção para selecionar o produto */}
      <select name="idCadastroProdutos" value={formData.idCadastroProdutos} onChange={handleChange}>
        <option value="">Selecione um produto</option>
        {produtos.map(produto => (
          <option key={produto.idCadastroProdutos} value={produto.idCadastroProdutos}>
            {produto.nome}
          </option>
        ))}
      </select>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default ControleEstoqueForm;

