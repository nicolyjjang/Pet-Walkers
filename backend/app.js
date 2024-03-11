const express = require('express');
const app = express();
const User = require('./models/User');
const cors = require('cors')
app.use(express.json()); // Habilita o parsing de JSON
app.use(cors());

app.get("/", async (req, res) => {
    res.send("Teste GET com sucesso");
});

app.post("/user", async (req, res) => {
    try {

        const { nome_tutor, cpf, telefone, sexo, email, senha, pet1, pet2, idade } = req.body;

        // Crie um novo registro de usuário
        const newUser = await User.create({
            nome_tutor,
            cpf,
            telefone,
            sexo,
            email,
            senha,
            pet1,
            pet2,
            idade
        });

        res.status(201).json(newUser); // Retorne o novo usuário criado
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: https://localhost:8080");
});
