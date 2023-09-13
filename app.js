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