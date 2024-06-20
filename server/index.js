const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "crudreposicaoapp",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let SQL = "INSERT INTO games (name, cost, category) VALUES (?, ?, ?)";
  db.query(SQL, [name, cost, category], (err, result) => {
    console.log(err);
  });
});

app.get("getCards", (req, res) => {
  let SQL = "SELECT * FROM games";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

// // teste de conexão
// const connection = mysql.createConnection({
//   host: '3000', // Substitua pelo host do cliente
//   user: 'root',
//   password: '1234',
//   database: 'crudreposicaoapp'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Erro ao conectar ao banco de dados: ', err);
//     return;
//   }
//   console.log('Conectado ao banco de dados!');
// });

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
