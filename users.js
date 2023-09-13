var a =100;
var b = 200;

// module.exports = a
// module.exports = b

function add(){

    console.log("this is add function")
}

const test = (a,b)=>{
    return a+b;
}

//module.exports = add
module.exports = {
    a,b,add,test
}

