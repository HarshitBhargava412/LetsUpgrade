const express = require("express");
const mobilesController = require("./mobilesController");

const router = express.Router();

router.get("/getAllMobiles", mobilesController.getAllmobiles);
router.get("/filterMobilesByRam/:ram", mobilesController.filterMobilesByRam);

module.exports = router;
