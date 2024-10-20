class UpdateTodo {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }

    async execute(id, updatedData) {
        const todo = await this.todoRepository.getById(id);
        if (!todo) {
            throw new Error('Todo not found');
        }
        todo.title = updatedData.title || todo.title;
        if (updatedData.completed !== undefined) {
            todo.completed = updatedData.completed;
        }
        return this.todoRepository.update(todo);
    }
}

module.exports = UpdateTodo;
