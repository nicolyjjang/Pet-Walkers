const express = require('express');
const app = express();
const User = require('./models/User')

app.get("/", async (req, res) => {
    res.send("Página inicial - Celke");
});

app.post("/user", async (req, res) => {
    res.send("Página cadastrar");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: https://localhost:8080");
});
