const mongo = require("mongoose")

const userSchema =  new mongo.Schema(
    {
        name: String,
        email:String,
        password:String,
    }
)

const userModel = mongo.model("userModel",userSchema)

module.exports = userModel;