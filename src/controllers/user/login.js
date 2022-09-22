import { User } from "../../models";
import { config } from "../../configs";
import { compareData, generateAccessToken, dateToString } from "../../utils";
import { UnAuthorizedError } from "../../errors";

export const login = async ({ input }) => {
  const { email, password } = input;

  let user = await User.findOne({ email });

  if (!user || !compareData(user.password, password))
    throw UnAuthorizedError("Invalid email or password");

  const tokenInfo = {
    payload: { id: user.id },
    secret: config.jwtAccessToken,
    expiresIn: 86400000,
  };
  const token = generateAccessToken(tokenInfo);

  return {
    code: 200,
    message: "Logged in",
    data: {
      token,
      expiresIn: dateToString(tokenInfo.expiresIn),
      user: user,
    },
  };
};
