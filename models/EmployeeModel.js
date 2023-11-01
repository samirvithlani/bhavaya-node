const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//same as java bean ..
//this model is connected with your collection of conneced db
const employeeSchema = new Schema({

    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    status:{
        type:Boolean,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }

})
// const employeeModel = mongoose.model("Employee",employeeSchema)
// module.exports = employeeModel;

module.exports = mongoose.model("Employee",employeeSchema);

