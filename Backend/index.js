const express = require("express");
const app = express();
const PORT = 3000;
const {createTodo, updateTodo} = require("./types.js");
app.use(express.json());

app.get("/todos",(req,res)=>{
    res.send("working");
});

app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    //store in db
});

app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
});

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`);
})