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


let query = "update from usuario set senha = '432' where codigo = 1;";


connection.query(query, function(error, results, fields){
    console.log("Alteracoes efetuadas com sucesso!");

})
connection.end();

