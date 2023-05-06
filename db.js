const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://ramki2002:ramki2002@cluster0.dzhpny4.mongodb.net/rkskcars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose