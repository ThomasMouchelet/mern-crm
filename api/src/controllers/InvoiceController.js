const Invoice = require('../models/Invoice')
const Customer = require('../models/Customer')

const InvoiceController = {
    create: async (req, res) => {
        customer = req.body.customer;
        id = customer.id;
        console.log("--customer : ", customer)
        const customerById = await Customer.findById(id);
        console.log("--customerById : ", customerById)
        
        try {
            const { amount, createdAt } = req.body;
            const invoice = await Invoice.create({
                amount,
                createdAt,
                customer: customerById
            })
            console.log("--invoice : ", invoice)
            await invoice.save();
            customerById.invoices.push(invoice);
            await customerById.save();
            res.send(invoice);
        } catch (error) {
            res.send(error);
        }
    },
    findAll: async (req, res) => {
        try {
            const invoices = await Invoice.find();
            res.send(invoices);
        } catch (error) {
            res.send(error);
        }
    },
    findOne: async (req, res) => {
        try {
            const invoice = await Invoice.findById(req.params.id);
            console.log("--invoice : ", invoice)
            res.send(invoice);
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = InvoiceController