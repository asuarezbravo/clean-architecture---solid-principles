const ITodoRepository = require('./ITodoRepository');
const Todo = require('../entities/Todo');

class TodoRepository extends ITodoRepository {
    constructor() {
        super();
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
        return todo;
    }

    getAll() {
        return this.todos;
    }

    getById(id) {
        return this.todos.find(todo => todo.id === id);
    }

    update(updatedTodo) {
        const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index > -1) {
            this.todos[index] = updatedTodo;
            return updatedTodo;
        }
        return null;
    }
}

TodoRepository.TodoEntity = Todo;

module.exports = TodoRepository;
