const express = require('express');
const bodyParser = require('body-parser');

const TodoRepository = require('./repositories/TodoRepository');
const CreateTodo = require('./usecases/CreateTodo');
const GetTodos = require('./usecases/GetTodos');
const UpdateTodo = require('./usecases/UpdateTodo');
const TodoController = require('./controllers/TodoController');

// Initialize repository
const todoRepository = new TodoRepository();

// Initialize use cases
const createTodo = new CreateTodo(todoRepository);
const getTodos = new GetTodos(todoRepository);
const updateTodo = new UpdateTodo(todoRepository);

// Initialize controller
const todoController = new TodoController(createTodo, getTodos, updateTodo);

// Setup express app
const app = express();
app.use(bodyParser.json());

// Routes
app.post('/todos', (req, res) => todoController.create(req, res));
app.get('/todos', (req, res) => todoController.getAll(req, res));
app.put('/todos/:id', (req, res) => todoController.update(req, res));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
