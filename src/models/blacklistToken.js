import { Schema, model } from "mongoose";

const blacklistTokenSchema = new Schema({
  token: String,
  expiresIn: Date,
});

export const BlackListToken = model("BlacklistTokens", blacklistTokenSchema);
