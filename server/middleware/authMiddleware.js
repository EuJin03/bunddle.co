import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { AuthenticationError } from "apollo-server";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    token = authHeader.split(" ")[1];

    if (token) {
      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET); //decoded

        req.user = await User.findById(id).select("-password"); //important

        next();
      } catch (error) {
        res.status(401);
        throw new AuthenticationError("Not authorised, token failed");
      }

      throw new Error("Authentication token must be 'Bearer [token]'");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorised, no token");
  }
});

export const seller = (req, res, next) => {
  if (req.user && req.user.isSeller) {
    next();
  } else {
    res.status(401);
    throw new Error("Not registered as an seller");
  }
};

//console.log(req.headers.authorization); // Authorization: Bearer ...
