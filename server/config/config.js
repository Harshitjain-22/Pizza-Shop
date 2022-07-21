const mongoose = require('mongoose');

//database Connection

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URL;
        const conn = await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // serverApi: ServerApiVersion.v1
            // useCreateIndex: true
        });
        console.log(`Connected to database ${conn.connection.host}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
    }
    
}

module.exports =  connectDB;


