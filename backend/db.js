require('dotenv').config()
const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://kumarpp9718:${process.env.KEY_P}@cluster0.vz3h2mr.mongodb.net/gofood?retryWrites=true&w=majority`;

const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true })
    console.log("connected to mongoose!")

    const fetched_data = await mongoose.connection.db.collection("food_items")
    fetched_data.find({}).toArray()
        .then((data) => {
            global.food_items = data
        })
        .catch((err) => {
            console.log(err)
        })

    const foodCategory = await mongoose.connection.db.collection("foodCategory")
    foodCategory.find({}).toArray()
        .then((data) => {
            global.foodCategory = data
        })
        .catch((err) => {
            console.log(err)
        })



}

module.exports = mongoDB
