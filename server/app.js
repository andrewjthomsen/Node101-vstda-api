const express = require('express');
const morgan = require('morgan');



const app = express();
app.use(morgan("dev"));

// mock data
var data = [
    {todoItemId: 0,
        name: "an item",
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: "another item",
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: "a done item",
        priority: 1,
        completed: true
    }
];
// GET request being sent to server will return with data


// add your code here
app.get("/", (req, res) => {
    res.status(200)
    res.send({ status: "ok"})
});

// READ ALL TODO ITEMS FROM LIST
app.get("/api/TodoItems", (req, res) => {
    res.status(200)
    res.json(data);
    console.log(data)
});

// READ SINGLE TODO ITEM FROM LIST
app.get("/api/TodoItems/:number", (req, res) => {
    res.json(data.find(function (item) {
        return item.todoItemId == req.params.number
    }));
});
// CREATE SINGLE TODO ITEM
// app.post() responsible for creating item
app.post("/api/TodoItems/", (req, res) => {
    console.log("req.body", req.body)
    console.log("todoItemId", todoItemId)
    let postedID = req.body.todoItemId;
    let foundItem = false;

    for (var i = 0; i < data.length; i++) {
        if (data[i].todoItemId === postedID) {
            data[i] = req.body;
            foundItem = true;
        }
    }
    if (foundItem === fale) {
        data.push(req.body)

    }
    res.status(201).json(req.body);
});

// DELETE TODO ITEM
app.delete("/api/TodoItems/:number", (req, res) => {
    let deleteItem = req.params.number;
    for (var i =0; i < data.length; i++) {
        if (data[i].todoItemId == deleteItem) {
            res.json(data[i]);
            data.splice(i, 1);
        }
    }
});

module.exports = app;