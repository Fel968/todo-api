import { TodoModel } from "../models/todo_models.js";

export const addTodo = async (req, res, next) => {
    // To do logic goes here
    // steps in creating a todo function for backend(to read)

    //1. validating user input
    // 2. write todo to database. we're using a cloud-based database. Local database will overwhelm your machine
    try {
        await TodoModel.create(req.body);
    
        // 3. respond to request
        res.status(201).json('Todo was added successfully!');
    } catch (error) {
      next(error); 
    }
}

export const getTodos = async (req, res, next) => {
    
try {
        // fetch todos from database
        const todos = await TodoModel.find();

        // return response
        res.status(200).json('All todos');

} catch (error) {
    next(error)
}}

export const updateTodo = (req, res, next) => {
    res.json('Todo Updated');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted')
}