
export const addTodo = (req, res, next) => {
    // To do logic goes here
    // steps in creating a todo function for backend(to read)
    res.json('Todo was added successfully!');
}

export const getTodos = (req, res, next) => {
    res.json('All todos');
}

export const updateTodo = (req, res, next) => {
    res.json('Todo Updated');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted')
}