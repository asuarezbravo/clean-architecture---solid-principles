class TodoController {
    constructor(createTodo, getTodos, updateTodo) {
        this.createTodo = createTodo;
        this.getTodos = getTodos;
        this.updateTodo = updateTodo;
    }

    async create(req, res) {
        try {
            const todo = await this.createTodo.execute(req.body);
            res.status(201).json(todo);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        const todos = await this.getTodos.execute();
        res.status(200).json(todos);
    }

    async update(req, res) {
        try {
            const updatedTodo = await this.updateTodo.execute(req.params.id, req.body);
            res.status(200).json(updatedTodo);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = TodoController;
