
const express = require('express');
const router = express.Router();

const authorControl=require("../controller/AuthorControl")


router.post("/insert",authorControl.dataInsert)
router.get("/datasave",authorControl.bookDisplay)
router.post("/addnewbook",authorControl.newBook)
router.get("/display",authorControl.Display)

module.exports=router


