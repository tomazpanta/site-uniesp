import jsonServer from 'json-server';

export default (req, res) => {
    // Cria o servidor JSON
    const server = jsonServer.create();
    const router = jsonServer.router('./data/db.json');  // Caminho para o seu arquivo db.json
    const middlewares = jsonServer.defaults();

    // Usa os middlewares padrão do JSON Server
    server.use(middlewares);
    server.use(router);

    // O Vercel precisa que a função retorne uma resposta, então usamos `server.handle` para processar a requisição
    server.handle(req, res);
}
