const express = require("express");
const morgan = require("morgan");
const dbConnection = require("./db");
const app = express();
const Task = require("./models/task.js");
app.use(morgan("dev"));

app.post("/tasks", async (req, res) => {
  const newTask = await Task.create({
    task: "clean the room",
    isDone: false,
  });

  res.send(newTask);
});

app.get("/tasks/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.send(task);
});

app.get("/allTasks", async (req, res) => {
  const allTasks = await Task.find();
  res.send(allTasks);
});

app.post("/updateTask", async (req, res) => {
  const updatetask = await Task.findByIdAndUpdate("680fc026c0b91825fbd4cddf", {
    isDone: true,
  });

  res.send(updatetask);
});

app.get("/deleteTask", async (req, res) => {
  const DTask = await Task.findByIdAndDelete("680fc026c0b91825fbd4cddf");

  res.send(DTask);
});

app.use("/", (req, res) => {
  res.send("app is connected");
});

app.listen(3000, () => {
  console.log("listening in port 3000");
});
