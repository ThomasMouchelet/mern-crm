const express = require("express");
const app = express()
const connection = require("./config/db");
const invoiceRouter = require("./src/routes/invoices.route")
const customerRouter = require("./src/routes/customers.route")

connection()
app.use(express.json());

// Routes
app.use("/api", invoiceRouter);
app.use("/api", customerRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));