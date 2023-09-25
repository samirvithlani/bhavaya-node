const express = require("express");
const app = express();
const PORT = 3000;

//API CREATE... Application preogramming interface...
//consume.. node --> produce...
//request method....
//GET,POST,PUT,DELETE

//service --> req,res
app.get("/user", (req, res) => {
  var users = [
    {
      id: 1,
      name: "bhavya",
    },
    {
      id: 2,
      name: "raj",
    },
  ];
  console.log("user api called....");
  //res.send("api called...")
  //res.status(402).send("api called..")
  res.status(201).json({
    message: "user fetch successfully..",
    data: users,
  });
});

app.get("/user/:uid",(req,res)=>{

    var id = req.params.uid
    console.log("id = ",id)
    res.status(200).json({
        message:"id received.",
        id:id
    })
})

app.get("/filuser/:id",(req,res)=>{
var id = req.params.id;
    var users =[
        {
            id:1,
            name:"bhavaya"
        },{
            id:2,
            name:"raj"
        },
        {
            id:3,
            name:"amit"
        }
    ]

    users = users.filter((user)=>{
        return user.id!=id;
    })
    console.log(users)
    res.status(201).json({
        message:"data filtered..",
        data:users
    })

})
app.listen(PORT, () => {
  console.log("server started on port", 3000);
});
