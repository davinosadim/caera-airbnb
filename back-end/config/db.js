import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Sucesso ao conectar com o bando de dados");
  } catch (error) {
    console.error({ message: "erro ao conectar banco de dados", error });
  }
};
