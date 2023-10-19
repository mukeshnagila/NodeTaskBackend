const auth1 = require("../middleware/Auth");
const {hollywoodController, bollywoodController, fitnessController, foodController, tecnologyController} = require("../Controllers/CategoryController");
const CategoryRouting = require("express").Router();

CategoryRouting.get("/bollywood", bollywoodController);

CategoryRouting.get("/hollywood", hollywoodController);

CategoryRouting.get("/fitness",fitnessController);

CategoryRouting.get("/food",foodController);

CategoryRouting.get("/tecnology",tecnologyController);


module.exports = CategoryRouting;