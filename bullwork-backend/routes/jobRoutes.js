const express = require("express");
const router = express.Router();
const { getAllJobs } = require("../controllers/JobControllers");

router.get("/", getAllJobs);

module.exports = router;
