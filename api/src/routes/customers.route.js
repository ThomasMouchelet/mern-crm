const express = require("express");
const CustomerController = require("../controllers/CustomerController");
const router = express.Router();

router.post("/customers", CustomerController.create);
router.get("/customers", CustomerController.findAll);
router.get("/customers/:id", CustomerController.findOne);

module.exports= router