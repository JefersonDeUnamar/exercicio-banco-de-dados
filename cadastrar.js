const mysql = require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    user :  'root',
    password : '',
    port : 3307,
    database :'Jef'
});

connection.connect();
console.log("Conectado!");


let query = "insert into usuario(login, senha) values('Jefer@gmail.com', '123');";


connection.query(query, function(error, results, fields){
    console.log("Alteracoes efetuadas com sucesso!");

})
connection.end();



