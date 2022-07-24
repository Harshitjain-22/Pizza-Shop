const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const app = express();


//config dotenv
dotenv.config();

//connection to DB
connectDB();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//route
app.use('/api/pizzas' , require("./routes/pizzaRoute"))
app.get("/" , (req , res) => {
    res.send("<h1>Hello World</h1>");
});


const port = process.env.PORT || 8080
app.listen(port , () =>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port ${port}`);
});
