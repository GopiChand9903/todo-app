if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const mongoose = require("mongoose");
const { boolean } = require("zod");
const MONGO_URL = process.env.DB_URL;

main()
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });
    
async function main(){
    await mongoose.connect(MONGO_URL);
}

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model("Todo",todoSchema);
