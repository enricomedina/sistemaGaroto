const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cadastroClientesRoutes = require('./cadastroClientes-routes');
const ContasAPagarRoutes = require('./ContasAPagar-routes');
const cadastroFornecedoresRoutes = require('./cadastroFornecedores-routes');
const cadastroFuncionariosRoutes = require('./cadastroFuncionarios-routes ');
const cadastroProdutosRoutes = require('./cadastroProdutos-routes ');
const contasAReceberRoutes = require('./contasAReceber-routes');
const registroVendasRoutes = require('./registroVendas-routes');

const app = express();
const port = 3001; // Defina a porta que deseja utilizar

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Usa as rotas do backend
app.use('/', cadastroClientesRoutes);
app.use('/', ContasAPagarRoutes);
app.use('/', cadastroFornecedoresRoutes);
app.use('/', cadastroFuncionariosRoutes);
app.use('/', cadastroProdutosRoutes);
app.use('/', contasAReceberRoutes);
app.use('/', registroVendasRoutes);


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
