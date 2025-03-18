const express = require("express");
const router = express.Router();
const controller = require("../controller/costumerController");

router.post("/login", controller.Login);
router.post("/register", controller.Registeration);
router.post("/authenticate", controller.userAuthenticate);
router.post("/deposite", controller.Deposite);
router.post("/profile", controller.profile);
router.post("/balance", controller.balance);
router.post("/reset", controller.resetPassword);
router.post("/withdraw", controller.withdraw);
router.post("/transaction", controller.transaction);
router.post("/statement", controller.Statement);

module.exports = router;

