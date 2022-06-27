const mobilesModel = require("./mobiles");

exports.getAllmobiles = (req, res) => {
  mobilesModel.find().then((response) => {
    res.json({ data: response });
  });
};

exports.filterMobilesByRam = (req, res) => {
  const ram = req.params.ram;
  console.log(ram);
  mobilesModel
      .find(
          { ram: ram },
          { _id: 0, brand_name: 1, model_name: 1, price: 1, ram: 1 }
      )
      .then((response) => {
        res.json({ data: response });
      });
};
