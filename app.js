const express = require("express");
const app=express();
const port=5000;



const todos = [
    { todo: " wake up", isCompleted: false },
 { todo: "Eat Breakfast", isCompleted: false }

];


app.get("/todos",(req,res)=>{

    res.status(200);
    res.json(todos);
});

app.post("/create/todo",(req,res)=>{

    const newToDo={
        todo:req.body.todo,
        isCompleted:isCompleted.body.isCompleted
    }

    todos.push(newToDo);
    res.status(201);
    res.json(newToDo);
  });


app.listen(port,()=>{

    

});