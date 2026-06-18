import express from "express";

const server = express();
const PORT = 3002;

server.use(express.json());

const customers = [
    {
        id: 1,
        name: "guilherme del toro",
        email: "guilherme@email.com"
    },
    {
        id: 2,
        name: "alexandre o grande",
        email: "alexandre@email.com"
    }
];

server.get("/customers", (req, res) => {
    return res.json(customers);
})

server.get("/customers/:id", (req, res) => {
    const { id } = req.params;
    const customer = customers.find(c => c.id === Number(id));
    const status = customer ? 200 : 404;

    console.log("GET :: /customers/:id", JSON.stringify(customer));

    return res.status(status).json(customer);
})

server.post("/customers", (req, res) => {
    const { name, email } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, email };

    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});

server.put("/customers/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const index = customers.findIndex(c => c.id === Number(id));
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers[index] = { id: Number(id), name, email }
    }

    return res.status(status).json(customers[index])
});

server.delete("/customers/:id", (req, res) => {
    const { id } = req.params;
    const index = customers.findIndex(c => c.id === Number(id));
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers.splice(index, 1);
    }

    return res.status(status).json();
});

server.listen(PORT, () => {
    console.log(`Servidor rondando na porta ${PORT}`)
})
