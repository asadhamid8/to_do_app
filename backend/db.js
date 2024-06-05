
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://asadhamid8:nWpZWY0cQjVRfn74@cluster0.f475k2a.mongodb.net/");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}