import express from "express";

const server = express();
const PORT = 3000;

// http://localhost:3000/hello?nome=Guilherme&idade=18
// Query params = ?nome=guilherme&idade=18

server.get("/hello", (req, res) => {

    const { nome, idade } = req.query;

    return res.json({
        title: "Hello World",
        nessage: `Ola ${nome}, tudo bem?`,
        idade: idade
    });
});

// http://localhost:3000/hello/guilherme
// Route params = /hello:nome

server.get("/hello/:nome/:idade", (req, res) => {

    const { nome, idade } = req.params;

    return res.json({
        title: "Hello World!",
        messagem: `Ola ${nome}, tudo bem?`,
        idade: idade
    })
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
