import { BlackListToken } from "../../models";
import {
  ForbiddenReqError,
  UnAuthorizedError,
  BadReqError,
} from "../../errors";
import {
  generateAccessToken,
  verifyToken,
  dateToString,
  computDateFromEpoch,
} from "../../utils";
import { config } from "../../configs";

export const refreshToken = async ({ headers }) => {
  const authorization = headers["authorization"];
  if (!authorization) throw new BadReqError("Header is missing");
  let token = authorization.split(" ")[1];
  if (!token) throw new ForbiddenReqError("Bearer token is missing");

  const isBlackListed = await BlackListToken.findOne({ token });
  if (isBlackListed) throw new UnAuthorizedError("Token expired");

  const tokenDetails = verifyToken(token, config.jwtAccessToken);
  if (!tokenDetails) throw new UnAuthorizedError("Token expired");

  const { id, exp } = tokenDetails;

  await BlackListToken.create({
    token,
    expiresIn: computDateFromEpoch(exp),
  });

  const tokenInfo = {
    payload: { id },
    secret: config.jwtAccessToken,
    expiresIn: 86400,
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
