import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    title: {type: String, required: true},
    icon: {type: String, required: true},
    completed: {type: Boolean, default: false}
});

// model function from mongoose. requires a name and a schema
// we're creating a class called TodoModel that uses mongoose's function parameters(name, schema)
export const TodoModel = model('Todo', todoSchema);

