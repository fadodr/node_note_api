import { BlackListToken } from "../../models";
import { ForbiddenReqError, UnAuthorizedError } from "../../errors";
import {
  generateAccessToken,
  verifyToken,
  dateToString,
  computDateFromEpoch,
} from "../../utils";
import { config } from "../../configs";

export const refreshToken = async ({ headers }) => {
  const authorization = headers["Authorization"];
  let token = authorization.split(" ")[1];
  if (!token) throw ForbiddenReqError("Bearer token is missing");

  const isBlackListed = await BlackListToken.findOne({ token });
  if (isBlackListed) throw UnAuthorizedError("Token expired");

  const tokenDetails = verifyToken(token, config.jwtAccessToken);
  if (!tokenDetails) throw UnAuthorizedError("Token expired");

  const { id, exp } = tokenDetails;

  await BlackListToken.create({
    token,
    expiresIn: computDateFromEpoch(exp),
  });

  const tokenInfo = {
    payload: { id },
    secret: config.jwtAccessToken,
    expiresIn: 86400000,
  };
  token = generateAccessToken(tokenInfo);
  return {
    code: 200,
    message: "Token refreshed successfully",
    data: {
      token,
      expiresIn: dateToString(tokenInfo.expiresIn),
    },
  };
};
