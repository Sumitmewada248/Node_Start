const express = require("express");
const router = express.Router();
const workerController = require('../controller/workcontroll');

router.post("/insert", workerController.insertWorker);
router.get("/display", workerController.displayWorker);

module.exports = router;

