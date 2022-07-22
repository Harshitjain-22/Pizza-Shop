const mongoose = require('mongoose');
const dotnev = require('dotenv');
const PizzaModel = require('./models/pizzaModel');
const Pizzas  = require('./data/pizza-data');
const connectDB = require('./config/config');

//config dotenv and mongodb conn file
dotnev.config();
  connectDB();






//import data
// const importData = () => {                       
//          PizzaModel.deleteMany();
//         const sampleData = Pizzas.map(pizza =>{return {...pizza}});
//          PizzaModel.insertMany(sampleData)
//         console.log('DATA IMPORTED');
//         // process.exit()
// } 
// (function () {
//     importData(); 
//   })();

const importData =  () => {
  try{
       PizzaModel.deleteMany();
      const sampleData = Pizzas.map((pizza) => {
        return {...pizza};
      });
       PizzaModel.insertMany(sampleData);
      console.log("DATA Imported");
      // process.exit();
    } 
    catch (error) {
      console.log(`${error}`);
      process.exit(1);
    }
  };
  
  const dataDestroy = () => {};
  
  if (process.argv[2] === "-d") {
    dataDestroy();
  } else {
    importData();
  }