import bcrypt from "bcryptjs";
import { UserInputError } from "apollo-server";
import User from "../../models/userModel.js";
import generateToken from "../../utils/generateToken.js";
import { validateLoginInput } from "../../utils/validator.js";

export default {
  Mutation: {
    login: async (_, { username, password }, context, info) => {
      const { errors, valid } = validateLoginInput(username, password);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ username });

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        errors.general = "Username or password is incorrect";
        throw new UserInputError("Username or password is incorrect", {
          errors,
        });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};
