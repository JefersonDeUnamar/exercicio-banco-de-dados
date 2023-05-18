const mysql = require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    user :  'root',
    password : '',
    port : 3307,
    database :'pessoas'
});

connection.connect();
console.log("Conectado!");

let query = "Select * from cadastro;";
connection.query(query, function(error, results, fields){
    console.log(results);
    console.table(results);
})

connection.end();
