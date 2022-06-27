const mongoose = require("mongoose");

const schema = mongoose.Schema;

const mobileSchema = new schema({
  ram: String
});

module.exports = mongoose.model("mobilesModel", mobileSchema, "mobiles");
