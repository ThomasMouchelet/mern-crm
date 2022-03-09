const Invoice = require('../models/Invoice')
const Customer = require('../models/Customer');
const req = require('express/lib/request');

const InvoiceController = {
    create: async (req, res) => {
        customer = req.body.customer;
        id = customer.id;
        const customerById = await Customer.findById(id);
        
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
            const customerId = invoice.customer.valueOf()
            const customer = await Customer.findById(customerId)
            
            invoice.customer = await customer
            res.send(invoice);
        } catch (error) {
            res.send(error);
        }
    },
    delete: async (req, res) => {
        try {
            await Invoice.deleteOne({"_id": req.params.id })
            res.send(true);
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = InvoiceController