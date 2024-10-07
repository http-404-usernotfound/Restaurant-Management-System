const { MongoClient } = require("mongodb");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

const client = new MongoClient("mongodb://127.0.0.1:27017");

const datab = client.db("Restaurant")
const menu = datab.collection("menu");
const suppliers = datab.collection("suppliers");
const employees = datab.collection("employees");

app.get('/', async (req, res) => {
    empCount = await employees.count();
    menuCount = await menu.count();
    suppCount = await suppliers.count();
    res.render("home", {"emp": empCount, "menu":menuCount, "supp":suppCount});
})

app.listen(5550);