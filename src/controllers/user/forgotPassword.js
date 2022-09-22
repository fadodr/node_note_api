import { User } from "../../models";
import { dateToString, generateRandStr, computeDate } from "../../utils";
import { NotFoundError } from "../../errors";

export const forgotPwd = async ({ input }) => {
  const { email } = input;
  const user = await User.findOne({ email });
  if (!user) throw NotFoundError("Email does not exist");

  const resetToken = generateRandStr(8);
  const updateDetails = {
    resetToken,
    resetTokenExpiresIn: 900000,
  };
  await user.update(updateDetails);

  return {
    code: 200,
    message: "kindly use the token below to reset your password",
    data: {
      token,
      expiresIn: dateToString(updateDetails.resetTokenExpiresIn),
      email,
    },
  };
};
