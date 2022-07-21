const mongoose = require('mongoose');
const dotnev = require('dotenv');
const PizzaModel = require('./models/pizzaModel');
const Pizzas  = require('./data/pizza-data');
const connectDB = require('./config/config');

//config dotenv and mongodb conn file
dotnev.config()
connectDB()

//import data
const importData = async () => {
    try {                            
        await PizzaModel.deleteMany();
        const sampleData = Pizzas.map(pizza =>{return {...pizza}});
        await PizzaModel.insertMany(sampleData)
        console.log('DATA IMPORTED');
        process.exit()
    } catch (error) {
         console.log(`${error}`);
         process.exit(1);
    }
};

const dataDestroy = () => {}

if(process.argv[2]==='-d'){
    dataDestroy()
}else{
    importData()
}