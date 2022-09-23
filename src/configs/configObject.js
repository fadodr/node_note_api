import dotenv from "dotenv";
dotenv.config();

export const config = Object.freeze({
    mongoUrl: process.env.MONGO_URL,
    jwtAccessToken: process.env.JWT_ACCESS_TOKEN,
});
