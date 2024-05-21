import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cadastroLogin">Cadastro de Login</Link>
          </li>
          <li>
            <Link to="/cadastroProdutos">Cadastro de Produtos</Link>
          </li>
          <li>
            <Link to="/cadastroFornecedores">Cadastro de Fornecedores</Link>
          </li>
          <li>
            <Link to="/cadastroClientes">Cadastro de Clientes</Link>
          </li>
          <li>
            <Link to="/historicoClientes">Histórico de interação de clientes</Link>
          </li>
          <li>
            <Link to="/controleEstoque">Controle de Estoque</Link>
          </li>
          <li>
            <Link to="/registroVendas">Registro de Vendas</Link>
          </li>
          <li>
            <Link to="/cadastroFuncionarios">Cadastro de Funcionários</Link>
          </li>
          <li>
            <Link to="/contasAPagar">Contas a Pagar</Link>
          </li>
          <li>
            <Link to="/contasAReceber">Contas a Receber</Link>
          </li>
          <li>
            <Link to="/listaCadastroProdutos">Lista Cadastro de Produtos</Link>
          </li>
          <li>
            <Link to="/listaCadastroFornecedores">Lista Cadastro de Fornecedores</Link>
          </li>
          <li>
            <Link to="/listaCadastroClientes">Lista Cadastro de Clientes</Link>
          </li>
          <li>
            <Link to="/listaControleEstoque">Lista Controle de Estoque</Link>
          </li>
          <li>
            <Link to="/listaHistoricoClientes">Lista Histórico de Interação de clientes</Link>
          </li>
          <li>
            <Link to="/listaCadastroLogin">Lista Cadastro de Login</Link>
          </li>
          <li>
            <Link to="/listaRegistroVendas">Lista Registro de Vendas</Link>
          </li>
          <li>
            <Link to="/listaCadastroFuncionarios">Lista Cadastro de Funcionários</Link>
          </li>
          <li>
            <Link to="/listaContasAPagar">Lista de Contas a Pagar</Link>
          </li>
          <li>
            <Link to="/listaContasAReceber">Lista de Contas a Receber</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
