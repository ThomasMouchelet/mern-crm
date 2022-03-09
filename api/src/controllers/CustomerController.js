const Customer = require('../models/Customer')

const CustomerController = {
    create: async (req, res) => {
        try {
            const customer = await new Customer(req.body).save();
            res.send(customer);
        } catch (error) {
            res.send(error);
        }
    },
    findAll: async (req, res) => {
        try {
            const customers = await Customer.find();
            res.send(customers);
        } catch (error) {
            res.send(error);
        }
    },
    findOne: async (req, res) => {
        try {
            const customer = await Customer.findById(req.params.id);
            res.send(customer);
        } catch (error) {
            res.send(error);
        }
    },
    delete: async (req, res) => {
        try {
            await Customer.deleteOne({"_id": req.params.id })
            res.send(true);
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = CustomerController