import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CadastroClientes from "./Pages/CadastroClientes";
import CadastroFornecedores from "./Pages/CadastroFornecedores";
import CadastroFuncionarios from "./Pages/CadastroFuncionarios";
import CadastroProdutos from "./Pages/CadastroProdutos";
import ContasAPagar from "./Pages/ContasAPagar";
import ContasAReceber from "./Pages/ContasAReceber";
import RegistroVendas from "./Pages/RegistroVendas";
import TabelaCadastroClientes from "./Pages/ListaCadastroClientes";
import TabelaCadastroFornecedores from "./Pages/ListaCadastroFornecedores";
import TabelaCadastroFuncionarios from "./Pages/ListaCadastroFuncionarios";
import TabelaCadastroProdutos from "./Pages/ListaCadastroProdutos";
import TabelaContasAPagar from "./Pages/ListaContasAPagar";
import TabelaContasAReceber from "./Pages/ListaContasAReceber";
import TabelaRegistroVendas from "./Pages/ListaRegistroVendas";
import TabelaCadastroLogin from "./Pages/ListaCadastroLogin"
import CadastroLogin from "./Pages/CadastroLogin";
import ControleEstoque from "./Pages/ControleEstoque";
import HistoricoClientes from "./Pages/HistoricoClientes";
import ListaHistoricoClientes from "./Pages/ListaHistoricoClientes";
import TabelaControleEstoque from "./Components/TabelaControleEstoque";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cadastroLogin" element={<CadastroLogin />} />
        <Route path="/cadastroClientes" element={<CadastroClientes />} />
        <Route path="/controleEstoque" element={<ControleEstoque />} />
        <Route path="/historicoClientes" element={<HistoricoClientes />} />
        <Route path="/cadastroFornecedores" element={<CadastroFornecedores />} />
        <Route path="/cadastroFuncionarios" element={<CadastroFuncionarios />} />
        <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
        <Route path="/contasAPagar" element={<ContasAPagar />} />
        <Route path="/contasAReceber" element={<ContasAReceber />} />
        <Route path="/registroVendas" element={<RegistroVendas />} />
        <Route path="/listaCadastroLogin" element={<TabelaCadastroLogin />} />
        <Route path="/listaControleEstoque" element={<TabelaControleEstoque />} />
        <Route path="/listaCadastroClientes" element={<TabelaCadastroClientes />} />
        <Route path="/listaCadastroFornecedores" element={<TabelaCadastroFornecedores />} />
        <Route path="/listaCadastroFuncionarios" element={<TabelaCadastroFuncionarios />} />
        <Route path="/listaCadastroProdutos" element={<TabelaCadastroProdutos />} />
        <Route path="/listaContasAPagar" element={<TabelaContasAPagar />} />
        <Route path="/listaContasAReceber" element={<TabelaContasAReceber />} />
        <Route path="/listaRegistroVendas" element={<TabelaRegistroVendas />} />
        <Route path="/listaHistoricoClientes" element={<ListaHistoricoClientes />} />
      </Routes>
    </>
  );
};

export default Rotas;
