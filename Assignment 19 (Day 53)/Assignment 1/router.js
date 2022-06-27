const express = require("express");
const mobilesController = require("./mobilesController");

const router = express.Router();

router.get("/getAllMobiles", mobilesController.getAllmobiles);
router.get("/filterMobilesByPrice/:lessPrice/:greatPrice", mobilesController.filterMobilesByPrice);

module.exports = router;
