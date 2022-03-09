const express = require("express");
const router = express.Router();
const Customer = require('../models/Customer')

router.post("/customers", async (req, res) => {
    try {
        const customer = await new Customer(req.body).save();
        res.send(customer);
    } catch (error) {
        res.send(error);
    }
});

router.get("/customers", async (req, res) => {
    try {
        const customers = await Customer.find();
        res.send(customers);
    } catch (error) {
        res.send(error);
    }
});

module.exports= router