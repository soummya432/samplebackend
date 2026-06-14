import mongoose from "mongoose";
const userSchema =mongoose.Schema(
    {
        name:{type:String,required:true,unique:true},
        email:{type:String,unique:true,unique:true},
        password:{type:String,required:true,minlength:8,unique:true},
    }
)

const User=mongoose.model('users',userSchema)

export default User