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


let query = "delete from usuario where login = 'Jef12@gmail.com';";


connection.query(query, function(error, results, fields){
    console.log("Alteracoes efetuadas com sucesso!");

})
connection.end();

