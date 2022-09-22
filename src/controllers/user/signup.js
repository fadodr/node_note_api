import { User } from "../../models";
import { hashData } from "../../utils";
import { ConflictError } from "../../errors";

export const signup = async ({ input }) => {
  const { name, username, email, password } = input;

  const existEmail = await User.findOne({ email });
  if (existEmail) throw ConflictError("Email already exist");

  const existUsername = await User.findOne({ username });
  if (existUsername)
    throw ConflictError(
      "Username already exist, please enter another username"
    );

  const hashPwd = await hashData(password);
  const user = await User.create({
    name,
    username,
    email,
    password: hashPwd,
  });

  return {
    code: 201,
    message: "user created successfully",
    data: user,
  };
};
