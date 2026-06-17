import express from "express";

const server = express();
const PORT = 3000;

const customers = [
    {
        id: 1,
        nome: "guilherme del toro",
        email: "guilherme@email.com"
    },
    {
        id: 2,
        nome: "alexandre o grande",
        email: "alexandre@email.com"
    }
];

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
server.get("/hello/:nome", (req, res) => {

    const { nome, idade } = req.params;

    return res.json({
        title: "Hello World!",
        messagem: `Ola ${nome}, tudo bem?`,
        idade: idade
    })
});

server.get("/customers", (req, res) => {
    return res.json({
        Title: "Lista de clientes",
        customers: customers
    })
});

server.get("/customers/:id", (req, res) => {

    const { id } = req.params;

    const customer = customers.find(c => c.id == Number(id));

    if (!customer) {
        return res.status(404).json({ error: "Cliente não encontrado" });
    }

    return res.status(200).json({
        title: `Perfil cliente id: ${customer.nome}`,
        customer: customer
    })
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});


