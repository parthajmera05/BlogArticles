import express from "express";
import axios from "axios";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/article.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended : true})) ; 
app.use("/articles" , router) ;
mongoose.connect("mongodb://127.0.0.1:27017/articlesDB").then(() => {
    console.log("Database Connected");
}); 


app.get("/" , (req , res) => {
    res.send("Hello World");
})
app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
});
  