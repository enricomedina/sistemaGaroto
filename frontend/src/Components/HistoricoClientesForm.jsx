// CadastroClientesForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HistoricoClientesForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    dataHora: '',
    tipoInteracao: '',
    resultadoInteracao: '',
    descricaoInteracao: '',
    idRegistroVendas: '',
  });

  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    fetchVendas();
  }, []);

  const fetchVendas = async () => {
    try {
      const response = await axios.get('http://localhost:3001/registroVendas');
      setVendas(response.data); // Assuming API returns array of vendas
    } catch (error) {
      console.error('Erro ao buscar vendas: ', error);
    }
  };

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
      await axios.post('http://localhost:3001/historicoClientes', formData);
      alert('Cadastro de cliente criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        sobrenome: '',
        dataHora: '',
        tipoInteracao: '',
        resultadoInteracao: '',
        descricaoInteracao: '',
        idRegistroVendas: '',
      });
    } catch (error) {
      console.error('Erro ao criar cadastro de cliente: ', error);
      alert('Erro ao criar cadastro de cliente. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome:" value={formData.nome} onChange={handleChange} />
      <input type="text" name="sobrenome" placeholder="Sobrenome:" value={formData.sobrenome} onChange={handleChange} />
      <input type="datetime-local" name="dataHora" placeholder="Data da interação:" value={formData.dataHora} onChange={handleChange} />
      <input type="text" name="tipoInteracao" placeholder="Tipo de interação:" value={formData.tipoInteracao} onChange={handleChange} />
      <input type="text" name="resultadoInteracao" placeholder="Resultado da interação" value={formData.resultadoInteracao} onChange={handleChange} />
      <input type="text" name="descricaoInteracao" placeholder="Descrição da interação:" value={formData.descricaoInteracao} onChange={handleChange} />
      <select name="idRegistroVendas" value={formData.idRegistroVendas} onChange={handleChange}>
        <option value="">Selecione o ID da venda</option>
        {vendas.map((venda) => (
          <option key={venda.idRegistroVendas} value={venda.idRegistroVendas}>
            {venda.idRegistroVendas}
          </option>
        ))}
      </select>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default HistoricoClientesForm;
