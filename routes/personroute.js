const express = require("express");

const router = express.Router();
const person = require("../models/person");

//test
router.get("/test", (req, res) => {
    
    res.send("this is test");
});

module.exports = router;
