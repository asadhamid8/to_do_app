const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();


app.post("/todo",async function(req,res){

     const createPayload=req.body;
    const parsePayload=types.createTodo.safeParse(createPayload);
    if(!parsePayload.success)
        {
            res.send(411).json({
                msg:"wrong inputs"
            })
        }

        return 
        await todo.create({
            title: parsePayload.title,
            description : parsePayload.description,
            completed: false
        
            })
        res.json({
            msg:"Todo created"
        })

})


 app.get("/todo",async function(req,res) {

    const todo= await todo.find();
    res.json({todos })

})


 app.put("/completed",async function(req,res){
const createPayload=req.body;
const parsePayload=types.updateTodo.safeParse(createPayload);
    if(!parsePayload.success)
        {
            res.send(411).json({
                msg:"wrong inputs"
            })
            
        }
        return;

        await todo.update({_id},{completed: true})
        res.json({
            msg: "todo completed"
        }
        );
})

app.listen(3000);
console.log("asad");