class GetTodos {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }

    async execute() {
        return this.todoRepository.getAll();
    }
}

module.exports = GetTodos;
