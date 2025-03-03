import express from "express";
import { connectUsingMongoose } from "./config/mongooseConfig.js";
import dataRoutes from "./Src/Features/DataTransfer/data.routes.js";
//import DataScript from "./script/script.js";  this is an script import for our excel data to be send on atlas server we need to run it only one time in this perticular case.
const app = express();

app.use(express.json());

// DataScript(); // script server call

app.use('/api', dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectUsingMongoose();
});
