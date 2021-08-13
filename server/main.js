import { config } from "dotenv";
import path from "path";
import pkg from "apollo-server";
const { ApolloServer, PubSub } = pkg;
import connectDB from "./config/db.js";
import express from "express";
import colors from "colors";
import morgan from "morgan";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

const __dirname = path.resolve();

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
