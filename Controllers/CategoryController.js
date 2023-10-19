const { hollywood, food, bollywood, fitness, tecnology } = require("../DataStore")

const bollywoodController = (req, res) => {
    return res.send(bollywood);
}

const hollywoodController = (req, res) => {
    return res.send(hollywood);
}

const fitnessController = (req, res) => {
    return res.send(fitness);
}

const tecnologyController = (req, res) => {
    return res.send(tecnology);
}

const foodController = (req, res) => {
    return res.send(food);
}

module.exports = {hollywoodController, bollywoodController, fitnessController, foodController, tecnologyController};