import mongoose from "mongoose";
const db=''
const connectDB = (url) => {
    mongoose.set("strictQuery", true);

    mongoose
        .connect("mongodb+srv://Ecommerce:Ecommerce@cluster0.a6gc6tm.mongodb.net/test")
        .then(() => console.log("MongoDB connected"))
        .catch((error) => console.log(error));
};

export default connectDB;