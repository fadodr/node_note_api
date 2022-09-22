import dotenv from "dotenv";
dotenv.config();

export const config = Object.freeze({
    mongoUrl: process.env.MONGO_URL,
    jwtRefreshToken: process.env.JWT_REFRESH_TOKEN,
    jwtResetToken: process.env.JWT_RESET_TOKEN
});
