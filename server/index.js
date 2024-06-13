const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "crudreposicaoapp",
});

app.get("/", (req, res) => {
    let SQL = 
    "INSERT INTO games ( name, cost, category ) VALUES ('Far Cry', 100, 'Acao/Aventura')";

    db.query(SQL, (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
