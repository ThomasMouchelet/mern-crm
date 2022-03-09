const express = require("express");
const app = express()
const invoiceRouter = require("./routes/invoices.route")
const customerRouter = require("./routes/customers.route")
const connection = require("./db");

connection()
app.use(express.json());
app.use("/api", invoiceRouter);
app.use("/api", customerRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));