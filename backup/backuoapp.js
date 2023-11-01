const users = require('./users.js')
const {name,age} = require('./students.js')

console.log("hello this is node")
// console.log(users.a)
// console.log(users.b)
console.log(users)
users.add()
var ans = users.test(10,20)
console.log(ans)

// console.log(name1) //name should be same as in students.js
// console.log(age1)
console.log(name)
console.log(age)
console.log("end of node 1")
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
  