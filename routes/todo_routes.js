
// why {Router}
import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo._controllers.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";

// create a router
const todoRouter = Router();

// Define routes
// middlewarefor upload should be done on the route that uses the upload functionality
todoRouter.post('/todos', remoteUpload.single('icon'), addTodo);

todoRouter.get('/todos', getTodos);

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todos/:id', deleteTodo);

// Export router
export default todoRouter; //why default