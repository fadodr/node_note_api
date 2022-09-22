import { User } from "../../models";
import { UnAuthorizedError } from "../../errors";
import { hashData } from "../../utils";

export const resetPwd = async ({ input }) => {
  const { token, password } = input;

  let user = await User.findOne({ token });
  if (!user) throw UnAuthorizedError("invalid or expired token");
  if (user.resetTokenExpiresIn <= Date.now())
    throw UnAuthorizedError("invalid or expired token");

  const hashPwd = await hashData(password);
  user = await user.update({
    password: hashPwd,
    resetToken: null,
    resetTokenExpiresIn: null,
  });

  return {
    code: 200,
    message: "password reset sucessfully",
    data: user,
  };
};
