import { User } from "../../models";
import { config } from '../../configs';
import { compareData, generateToken, dateToString } from "../../utils";
import { UnAuthorizedError } from "../../errors";

export const login = async ({ input }) => {
    const { email, password } = input;

    const user = await User.findOne({ email });
    if (!user) throw UnAuthorizedError("Invalid email or password");

    const isPwdCorrect = await compareData(user.password, password);
    if (!isPwdCorrect) throw UnAuthorizedError("Invalid email or password");

    const tokenInfo = {
        payload: { id: user.id, email: user.email },
        secret: config.jwtRefreshToken,
        expiresIn: 86400000,
    };
    const token = generateToken(tokenInfo);

    return {
        code: 200,
        message: "Logged in",
        data: {
            token,
            expiresIn: dateToString(tokenInfo.expiresIn),
            user,
        },
    };
};
