//Lista de Clientes
import React from "react";
import TabelaHistoricoClientes from "../Components/TabelaHistoricoClientes";

const ListaHistoricoClientes = () => {
  return (
    <>
      <div>
        <h2>Lista de histórico de interação dos clientes</h2>
        <TabelaHistoricoClientes />
      </div>
    </>
  );
};

export default ListaHistoricoClientes;
