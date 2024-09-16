const express = require("express");
const app = express();
const PORT = 3000;
const {createTodo, updateTodo} = require("./types.js");
const { todo } = require("./db.js");
const cors = require("cors");

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({});
    res.json({todos});
});

app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    //store in db
    await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "todo created"
    })
});

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    await todo.updateOne({_id:req.body.id}, {completed: true});
    res.json({
        msg: "todo marked as completed"
    })
});

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`);
})