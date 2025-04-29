const mongoose = require('mongoose');

const taskSchema =new mongoose.Schema({
    task:String,
    isDone:Boolean
})

const Task=mongoose.model("Task",taskSchema);

module.exports=Task;