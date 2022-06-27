const mobilesModel = require("./mobiles");

exports.getAllmobiles = (req, res) => {
  mobilesModel.find().then((response) => {
    res.json({ data: response });
  });
};

exports.filterMobilesByPrice = (req, res) => {
  const less_price = req.params.lessPrice;
  const great_price = req.params.greatPrice;
  console.log(less_price);
  console.log(great_price);
  mobilesModel
      .find(
          { price: {$gt: less_price, $lt: great_price}},
          { _id: 0, brand_name: 1, model_name: 1, price: 1, ram: 1 }
      )
      .then((response) => {
        res.json({ data: response });
      });
};