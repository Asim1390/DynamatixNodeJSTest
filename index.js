/**
 * Express server setup and configuration.
 * @module Server
 * @description it is an api which saves excel sheet data onto the mongoDb severver which is Atlas 
 * @author AsimSwar
 */

import express from "express";
import { connectUsingMongoose } from "./config/mongooseConfig.js";
import dataRoutes from "./Src/Features/DataTransfer/data.routes.js";
//import DataScript from "./script/script.js";  this is an script import for our excel data to be send on atlas server we need to run it only one time in this perticular case if new data is add on sheet then we need to run it again.
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/api", dataRoutes);

// DataScript(); // script server call

/**
 * Starts the Express server and connects to MongoDB.
 * @function
 * @param {number} PORT - The port number to listen on.
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectUsingMongoose();
});
