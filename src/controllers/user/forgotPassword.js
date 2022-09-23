import { User } from "../../models";
import { generateRandStr, computeDate } from "../../utils";
import { NotFoundError } from "../../errors";

export const forgotPwd = async ({ input }) => {
  const { email } = input;
  const user = await User.findOne({ email });
  if (!user) throw new NotFoundError("Email does not exist");

  const resetToken = generateRandStr(8);
  const updateDetails = {
    resetToken,
    resetTokenExpiresIn: computeDate(900),
  };
    await User.updateOne({ id: user.id }, updateDetails);

  return {
    code: 200,
    message: "kindly use the token below to reset your password",
    data: {
      token: resetToken,
      expiresIn: updateDetails.resetTokenExpiresIn.toISOString(),
      email,
    },
  };
};
