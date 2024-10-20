class CreateTodo {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }

    async execute(todoData) {
        const newTodo = new this.todoRepository.TodoEntity(todoData);
        return this.todoRepository.add(newTodo);
    }
}

module.exports = CreateTodo;
