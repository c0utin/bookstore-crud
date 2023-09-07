import express from "express";
import connectDatabase from "./config/dbConnnect.js";
import routes from "./routes/index.js";

// Connect database

const connection = await connectDatabase();

connection.on('error', (error) => {
  console.error("connection error :(", error);
});

connection.once("open", () => {
  console.log("connection sucessfull");
});

const app = express();
routes(app); 


export default app;