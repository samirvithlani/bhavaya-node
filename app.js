const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

//API CREATE... Application preogramming interface...
//consume.. node --> produce...
//request method....
//GET,POST,PUT,DELETE

//service --> req,res

//requireing model...temporarily

const employeeModel = require("./models/EmployeeModel");

//GET
//localhost:3000/employee
app.get("/emp", (req, res) => {
  console.log("get request");
  //res.send("get request");
  res.status(200).json({
    message: "get request",
  });
});

app.get("/employee", (req, res) => {
  employeeModel
    .find()
    .then((employees) => {
      res.status(200).json({
        message: "employee fetched successfully",
        data: employees,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error occured",
        data: [],
      });
    });
});

app.get("/employee1", async (req, res) => {
  try {
    const employees = await employeeModel.find();
    res.status(200).json({
      message: "employee fetched successfully",
      data: employees,
    });
  } catch (err) {
    res.status(500).json({
      message: "error occured",
      data: [],
    });
  }
});

app.get("/employee/:id", async (req, res) => {
  console.log("params...", req.params);
  const id = req.params.id;
  try {
    const employee = await employeeModel.findById(id);
    res.status(200).json({
      message: "employee fetched successfully",
      data: employee,
    });
  } catch (err) {
    res.status(500).json({
      message: "error occured",
      data: [],
    });
  }
});

app.get("/employeebyname/:name", async (req, res) => {
  console.log("params...", req.params);
  const name = req.params.name;
  try {
    const employees = await employeeModel.find({ name: name });
    res.status(200).json({
      message: "employee fetched successfully",
      data: employees,
    });
  } catch (err) {
    res.status(500).json({
      message: "error occured",
      data: [],
    });
  }
});

//db connection
const db = mongoose.connect("mongodb://127.0.0.1:27017/bhavya_node1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.then(() => {
  console.log("connected to db");
}).catch((err) => {
  console.log("error", err);
});

app.listen(PORT, () => {
  console.log("server started on port", 3000);
});
