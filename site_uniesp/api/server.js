// Importação das bibliotecas
import express from 'express';
import cors from 'cors';
import jsonServer from 'json-server';

// Inicializando o servidor Express
const app = express();

// Usando CORS para permitir requisições de diferentes origens
app.use(cors());

// Usando JSON Server para fornecer os dados do arquivo db.json
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();

// Configurando a rota do JSON Server
server.use(middlewares);
server.use(router);

// Configuração de uma rota customizada (exemplo)
app.get('/api/noticias', (req, res) => {
  res.json({ message: 'Aqui estão as notícias!' });
});

// Inicializando o servidor na porta 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
