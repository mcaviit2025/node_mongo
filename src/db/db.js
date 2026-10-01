const mongoose = require("mongoose")


async function connectDb() {
    await mongoose.connect("mongodb+srv://mcaviit2025_db_user:4LPJudqeCvovBSgG@mern.dlzeozf.mongodb.net/test_mongo")

    console.log("Connected To DB")
    
}
module.exports=connectDb