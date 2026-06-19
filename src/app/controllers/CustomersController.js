let customers = [
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
]
class CustomersController {
    constructor() {
    }

    index(req, res) {
        return res.json(customers);
    }

    show(req, res) {
        const { id } = req.params;
        const customer = customers.find(c => c.id === Number(id));
        const status = customer ? 200 : 404;

        console.log("GET :: /customers/:id", JSON.stringify(customer));

        return res.status(status).json(customer);
    }

    create(req, res) {
        const { name, email } = req.body;
        const id = customers[customers.length - 1].id + 1;

        const newCustomer = { id, name, email };

        customers.push(newCustomer);

        console.log("POST :: /customers", JSON.stringify(newCustomer))

        return res.status(201).json(newCustomer);
    }

    update(req, res) {
        const { id } = req.params;
        const { name, email } = req.body;

        const index = customers.findIndex(c => c.id === Number(id));
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers[index] = { id: Number(id), name, email }
        }

        console.log("PUT :: /customers/:id", JSON.stringify(customer[index]));

        return res.status(status).json(customers[index])
    }

    destroy(req, res) {
        const { id } = req.params;
        const index = customers.findIndex(c => c.id === Number(id));
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers.splice(index, 1);
        }

        return res.status(status).json();
    }
}

export default new CustomersController;