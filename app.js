const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

//API CREATE... Application preogramming interface...
//consume.. node --> produce...
//request method....
//GET,POST,PUT,DELETE

//service --> req,res



//db connection
const db  = mongoose.connect("mongodb://127.0.0.1:27017/bhavya_node",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
db.then(() => {
  console.log("connected to db");
}).catch((err) => {
  console.log("error", err);
})


app.listen(PORT, () => {
  console.log("server started on port", 3000);
});
