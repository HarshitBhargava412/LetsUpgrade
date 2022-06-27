const mongoose = require("mongoose");

const schema = mongoose.Schema;

const mobileSchema = new schema({
  price: Number
});

module.exports = mongoose.model("mobilesModel", mobileSchema, "mobiles");
