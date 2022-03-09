const express = require("express");
const router = express.Router();
const Invoice = require('../models/Invoice')
const Customer = require('../models/Customer')

router.post("/invoices", async (req, res) => {
    customer = req.body.customer;
    id = customer.id;
    try {
        const { amount, createdAt } = req.body;
        const invoice = await Invoice.create({
            amount,
            createdAt,
            customer:id
        })
        await invoice.save();
        const customerById = await Customer.findById(id);
        customerById.invoices.push(invoice);
        await customerById.save();
        res.send(invoice);
    } catch (error) {
        res.send(error);
    }
});

router.get("/invoices", async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.send(invoices);
    } catch (error) {
        res.send(error);
    }
});

module.exports= router