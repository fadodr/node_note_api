import { BlackListToken } from "../../models";
import { ForbiddenReqError, BadReqError } from "../../errors";
import { verifyToken, computDateFromEpoch } from "../../utils";
import { config } from "../../configs";

export const logout = async ({ headers }) => {
    const authorization = headers["authorization"];
    if (!authorization) throw new BadReqError('Header is missing');
  let token = authorization.split(" ")[1];
  if (!token) throw new ForbiddenReqError("Bearer token is missing");

  const tokenDetails = verifyToken(token, config.jwtAccessToken);
  if (tokenDetails) {
    await BlackListToken.create({
      token,
      expiresIn: computDateFromEpoch(tokenDetails.exp),
    });
  }
  return;
};
