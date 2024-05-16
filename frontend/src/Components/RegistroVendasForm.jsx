// RegistroVendasForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const RegistroVendasForm = () => {
  const [formData, setFormData] = useState({
    nomeProduto: '',
    dataHoraVenda: '',
    itensVendidos: '',
    totalVenda: '',
    metodoPagamento: '',
    numeroFatura: '',
    statusVenda: '',
    observacoes: ''
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
      await axios.post('http://localhost:3001/registroVendas', formData);
      alert('registroVendas criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nomeProduto: '',
        dataHoraVenda: '',
        itensVendidos: '',
        totalVenda: '',
        metodoPagamento: '',
        numeroFatura: '',
        statusVenda: '',
        observacoes: ''
      });
    } catch (error) {
      console.error('Erro ao criar registroVendas', error);
      alert('Erro ao criar registroVendas. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nomeProduto" placeholder="Nome do Produto" value={formData.nomeProduto} onChange={handleChange} />
      <input type="date" name="dataHoraVenda" placeholder="Data e Hora da Venda" value={formData.dataHoraVenda} onChange={handleChange} />
      <input type="text" name="itensVendidos" placeholder="Itens Vendidos" value={formData.itensVendidos} onChange={handleChange} />
      <input type="number" name="totalVenda" placeholder="Total da Venda" value={formData.totalVenda} onChange={handleChange} />
      <input type="text" name="metodoPagamento" placeholder="Método de Pagamento" value={formData.metodoPagamento} onChange={handleChange} />
      <input type="number" name="numeroFatura" placeholder="Número de Fatura" value={formData.numeroFatura} onChange={handleChange} />
      <input type="text" name="statusVenda" placeholder="Status da Venda" value={formData.statusVenda} onChange={handleChange} />
      <input type="text" name="observacoes" placeholder="Observações" value={formData.observacoes} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default RegistroVendasForm;
