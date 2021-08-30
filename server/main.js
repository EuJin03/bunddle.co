import { config } from "dotenv";
import path from "path";
import { ApolloServer } from "apollo-server";
import { PubSub } from "graphql-subscriptions";
import connectDB from "./config/db.js";
import colors from "colors";
import morgan from "morgan";
import { typeDefs } from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers/index.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

config();
connectDB();

const __dirname = path.resolve();

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

if (process.env.NODE_ENV === "development") {
  console.log("all works");
}

const __port__ = process.env.PORT || 5000;

server.listen(
  __port__,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on ${__port__}`.yellow
      .bold
  )
);
