// TODO: this file :)
const express = require ("express");
const app = express();
const PORT = 3000;

const employees = require ("./employees")

app.get("/", (req, res)=>{
  res.send("Hello employees!")
});

app.get("/employees/random", (req, res) =>{
  const randomEmployee = Math.floor(Math.random() * employees.length);
  res.json(employees[randomEmployee]);
})

app.get("/employees", (req, res) =>{
  res.json(employees);
});

app.get("/employees/:id" , (req, res) =>{
  const employeeID = (+req.params.id);
  const singleEmployee = employees.find( obj => obj.id === employeeID);

  if(singleEmployee){
    res.json(singleEmployee)
    }
    else{
      res.status(404).json("No employee with that ID.")
    }
})


app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
});

