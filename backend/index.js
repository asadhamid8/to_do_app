const express=require("express");
const types= require("/types.js")
const app=express;
const todo=require("/db.js")
app.use(express.json)

app.post("/todo",async function(req,res){

     const createPayload=req.body;
    const parsePayload=types.createtodo.safeParse(createPayload);
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
const parsePayload=types.updatetodo.safeParse(createPayload);
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
