"use strict";

const express = require("express");
const router = express.Router(); 
const ctrl = require("./home.ctrl");



// 엡 세팅
router.get("/", ctrl.home);
router.get("/login", ctrl.login);
//router.post("/login", ctrl.login);


module.exports = router;