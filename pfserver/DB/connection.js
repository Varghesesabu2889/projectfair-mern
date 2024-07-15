const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(() => {
    console.log(`mongodb Atlas Successfully connected to pfserver`)
}).catch((err) => {
    console.log(`MongoDB Connection Failed !!error:${err}`);
})
