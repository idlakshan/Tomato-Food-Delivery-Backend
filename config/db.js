import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://idlakshan21:123@cluster0.gbio5vy.mongodb.net/food-del').then(()=>{
        console.log("Db Connected");
    })
}