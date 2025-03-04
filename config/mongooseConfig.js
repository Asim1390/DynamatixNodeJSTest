/**
 * Mongoose module for MongoDB connection.
 * @module mongoose
 * @requires mongoose
 */

import mongoose from "mongoose";

/**
 * MongoDB connection URL.
 * @constant {string} url
 * @default "mongodb+srv://asimswar786:GWBmYiyxgLHSzWGj@cluster0.lyob8.mongodb.net/"
 */
const url =
  "mongodb+srv://asimswar786:GWBmYiyxgLHSzWGj@cluster0.lyob8.mongodb.net/";

/**
 * Connects to MongoDB using Mongoose.
 * @function connectUsingMongoose
 * @async
 * @returns {Promise<void>} Resolves when the connection is successful.
 * @throws {Error} If there is an error connecting to the database.
 * @example
 * // Example usage:
 * await connectUsingMongoose();
 * // Output: 'Mongodb connected using mongoose.' or 'Error while connecting to db: ...'
 */
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