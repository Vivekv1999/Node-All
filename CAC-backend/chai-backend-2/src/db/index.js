import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const conncetDB = async () => {
  try {
    const connctionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      connctionInstance,
      "mongodb conncetd sucessfully !!---host",
      connctionInstance.connection.host
    );
  } catch (error) {
    console.error("mondoDb conncetion failed", error);
    process.exit(1);
  }
};
export default conncetDB;
