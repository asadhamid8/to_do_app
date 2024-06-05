const express=require("express");
const types= require("/types.js")
const app=express;

app.use(express.json)

app.post("/todo",function(req,res){

     const createPayload=req.body;
    const parsePayload=types.createtodo.safeParse(createPayload);
    if(!parsePayload.success)
        {
            res.send(411).json({
                msg:"wrong inputs";
            })
        }

        return 
})


 app.get("/todo",function(req,res) {


}
 )


 app.put("/update",function(req,res){
const createPayload=req.body;
const parsePayload=types.updatetodo.safeParse(createPayload);
    if(!parsePayload.success)
        {
            res.send(411).json({
                msg:"wrong inputs"
            })
            
        }

}
 )
