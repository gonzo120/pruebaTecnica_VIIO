import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required:true,
            trim:true, //sirve para quitar los espacios {  Nelson  }-->{Nelson}
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        }
    },{
        timestamps:true,
    }
);

export default mongoose.model("User",userSchema) //creacion de collectiones Usuarios