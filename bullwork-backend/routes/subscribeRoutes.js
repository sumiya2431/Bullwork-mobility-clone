const express = require("express");
const { subscribeUser } = require("../controllers/subscribeController");

const router = express.Router();

router.post("/", subscribeUser); // handles /subscribe

module.exports = router;
