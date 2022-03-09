const express = require("express");
const router = express.Router();
const InvoiceController = require("../controllers/InvoiceController");

router.post("/invoices",InvoiceController.create);
router.get("/invoices", InvoiceController.findAll);
router.get("/invoices/:id", InvoiceController.findOne);

module.exports= router