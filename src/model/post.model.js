const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    content:{
        type:String,
    }
})

const postModel = mongoose.model("noteModel",noteSchema)

module.exports = postModel;




