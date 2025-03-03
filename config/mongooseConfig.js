import mongoose from "mongoose";

const url =
  "mongodb+srv://asimswar786:GWBmYiyxgLHSzWGj@cluster0.lyob8.mongodb.net/";

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      family: 4,
    });
    console.log("Mongodb connected using mongoose.");
  } catch (error) {
    console.log("Error while connecting to db");
    console.log(error);
  }
};
