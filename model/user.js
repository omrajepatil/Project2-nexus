import mongoose from "mongoose";

const userSchema =new  mongoose.Schema({
    name:String,
    // email:String,
    message:String
});

const User = new mongoose.model("User",userSchema);

export default User;