const http = require('http');
const { setEnvironmentData } = require('worker_threads');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html');
    res.end('<h1> Ola, voce entrou no servidor da turma INF 261.</h1>');

});
    server.listen(port, hostname, () => {
        console.log(`Servidor rodando no endereço http://${hostname}, na porta ${port}`);
    })