require("dotenv").config();

const express = require("express");
const router = express.Router();
const AccountData = require("./models/accountData");

router.get("/account-data", async (req, res) => {
  try {
    const accountData = await AccountData.find({});
    res.json(accountData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;


// new line

const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://admin:<Helloworld>@cluster0.4lo8g3o.mongodb.net/?retryWrites=true&w=majority";

router.get("/data", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db("testdb");
    const collection = db.collection("test");
    const data = await collection.find({

