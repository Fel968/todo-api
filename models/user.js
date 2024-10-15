import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const userSchema = new Schema({
name: {type: string},
password: {type: string},
email: {type: string}
});

todoSchema.plugin(toJSON);

export const userModel = model('User', userSchema);



