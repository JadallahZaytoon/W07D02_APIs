const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users=[

    { name: "John", age: 25 },
    { name: "Jane", age: 20 },
    { name: "Mark", age: 19 },
];

app.get("/users",(req,res)=>{

    res.status(200);
    res.json(users);
})

app.get("/user",(req,res)=>{

    const user = req.query.name

    const found = users.find((element)=>{
        return element.name === user
    });

    if(found){
        res.status(200);
        res.json(user);
    }
    else
    {
        res.status(404);
        res.json("Not Found")
    }

});

app.get("/user/:name", (req, res) => {
    const user = req.params.name
  
    const found = users.find((element) => {
      return element.name === user;
    });
  
    if (found) {
      // set the response status code to 200 (OK)
      // sends back a response of the found user
      res.status(200);
      res.json(found);
    } else {
      // set the response status code to 404 (Not Found)
      res.status(404);
      res.json("User not found");
    }
  });
  

  app.listen(port,()=>{

    

  })