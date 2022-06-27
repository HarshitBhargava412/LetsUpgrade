const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();
app.use(express.json());

app.use("/", router);

mongoose
  .connect(
    "mongodb+srv://admin:mongo123@cluster0.j9gfv.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then(
    app.listen(4040, "localhost", () => {
      console.log("Server started");
    })
  )
  .catch((err) => console.log(err));
