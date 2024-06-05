const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://asadhamid8:nWpZWY0cQjVRfn74@cluster0.f475k2a.mongodb.net/");

const todosschema = mongoose.Schema({
        name: String,
        description : String,
        completed : Boolean
    })

const todos= mongoose.model('todos', todosschema);

module.export={
    todo
}