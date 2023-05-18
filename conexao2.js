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

//let query = "INSERT INTO cadastros(email, nome, idade, profissao)values('carlos@gmail.com', 'Carlos', 40, 'Professor');";
//let query = "Select * from cadastros;";
let query = "delete from cadastro where codigo = 5;";
//let query = "update from cadastros set idade = 30 where codigo = 4;";
connection.query(query, function(error, results, fields){
    console.log("Alteracoes efetuadas com sucesso!");
   // console.log(results);
  //  console.table(results);
})

connection.end();