import { User } from "../../models";
import { UnAuthorizedError } from "../../errors";
import { hashData } from "../../utils";

export const resetPwd = async ({ input }) => {
  const { token, password } = input;

  let user = await User.findOne({ token });
  if (!user || user.resetTokenExpiresIn <= Date.now())
    throw new UnAuthorizedError("invalid or expired token");

  const hashPwd = await hashData(password);
  user.password = hashPwd,
  user.resetToken = undefined,
  user.resetTokenExpiresIn = undefined,
  user = await user.save();

  return {
    code: 200,
    message: "password reset sucessfully",
    data: user,
  };
};
