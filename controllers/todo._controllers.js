import { TodoModel } from "../models/todo_models.js";
import { addTodoValidator, updateTodoValidator } from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
    // To do logic goes here
    // steps in creating a todo function for backend(to read)

    //1. validating user input
   


    // 2. write todo to database. we're using a cloud-based database. Local database will overwhelm your machine
    try {
        console.log(req.file);
        const { error, value } = addTodoValidator.validate({
            ...req.body, //spread operator
            icon: req.file?.filename
        });

        if (error){
            return res.status(422).json(error);
        }

        await TodoModel.create(value);

        // 3. respond to request
        res.status(201).json('Todo was added successfully!');
    } catch (error) {
        next(error);
    }
}

export const getTodos = async (req, res, next) => {

    try {
        // filter todos for search by keywords
        const {filter="{}", limit = 10, skip = 0} = req.query;
        // fetch todos from database
        const todos = await TodoModel.find(JSON.parse(filter)).limit(limit).skip(skip);

        // return response
        res.status(200).json(todos);

    } catch (error) {
        next(error)
    }
}

export const updateTodo = (req, res, next) => {
    res.json('Todo Updated');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted')
}

