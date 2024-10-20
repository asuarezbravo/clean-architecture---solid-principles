
# Node.js Todo API - Clean Architecture & SOLID Principles

This project demonstrates how to build a simple **Todo API** using **Node.js** while applying **Clean Architecture** and **SOLID principles**. The project is structured in such a way that it separates core business logic from framework- and infrastructure-specific concerns, making the codebase easier to maintain, extend, and test.

## Project Structure

The project follows the Clean Architecture guidelines, which emphasize separating concerns across different layers. Here's an overview of the structure:

```
src/
├── controllers/      # Handles incoming HTTP requests and responses
│   └── TodoController.js
├── entities/         # Core business entities (e.g., Todo)
│   └── Todo.js
├── repositories/     # Abstract interface and implementation for data access
│   ├── TodoRepository.js
│   └── ITodoRepository.js
├── usecases/         # Business logic or "application services"
│   ├── CreateTodo.js
│   ├── GetTodos.js
│   └── UpdateTodo.js
├── infrastructure/   # Infrastructure details (e.g., database connection)
│   └── Database.js
└── index.js          # Application entry point and routing
```

## Design Decisions

### Clean Architecture
Clean Architecture emphasizes the importance of organizing code in layers, with a clear separation between core business logic and external systems like databases, frameworks, and APIs. This ensures that the business rules remain independent of the external environment, making the code flexible and adaptable to change.

The key layers in this project are:

- **Entities**: Pure business objects. For example, the `Todo` entity represents a task with a title and completed status, and it has no dependencies on external systems.
- **Use Cases**: The application-specific logic. These use cases, like `CreateTodo`, `GetTodos`, and `UpdateTodo`, handle the logic of the Todo application without worrying about where or how data is stored.
- **Repositories**: The repository layer acts as an interface between use cases and the data layer, abstracting the underlying data storage (in this case, an in-memory array). It enables flexibility for switching to a real database without affecting the core logic.
- **Controllers**: These act as the boundary between the external world (HTTP requests) and the internal application logic. They depend on the use cases to perform business logic.

### SOLID Principles
This project also follows **SOLID** principles, a set of guidelines for writing clean, maintainable, and scalable code.

1. **Single Responsibility Principle (SRP)**: Every class has one and only one reason to change. For instance, the `TodoController` is only responsible for handling HTTP requests, while the `TodoRepository` manages data persistence.
  
2. **Open/Closed Principle (OCP)**: Classes are open for extension but closed for modification. For example, the repository interface (`ITodoRepository`) can be extended with new methods, but the core structure of the application remains unchanged.

3. **Liskov Substitution Principle (LSP)**: Subclasses should be able to replace their base classes without affecting the application. In this case, any class implementing `ITodoRepository` can be substituted into the system without changes to the use cases.

4. **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they don't use. The `ITodoRepository` defines only the methods needed for the `TodoRepository`, ensuring each implementation focuses on what's required.

5. **Dependency Inversion Principle (DIP)**: High-level modules (use cases) should not depend on low-level modules (repositories); instead, they should depend on abstractions. The `usecases` layer depends on the repository interface, not on the implementation, allowing easy swapping of data storage methods.

## Running the Project

1. **Install dependencies**:

```bash
npm install
```

2. **Run the API**:

```bash
npm start
```

3. The API will be running on `http://localhost:3000`.

## API Endpoints

- **POST** `/todos` - Create a new Todo
- **GET** `/todos` - Retrieve all Todos
- **PUT** `/todos/:id` - Update an existing Todo

## Future Improvements

- Replace the in-memory array with a real database (e.g., MongoDB, PostgreSQL).
- Add error handling and validation.
- Write unit tests for the use cases to ensure that business logic is isolated and testable.

## Conclusion

This project demonstrates how Clean Architecture and SOLID principles can be applied in a Node.js application to ensure flexibility, maintainability, and scalability. By following these principles, the core business logic remains independent from frameworks and infrastructure, making the system easier to adapt as requirements change.

to separate concerns and follow best practices for maintainable and scalable software design.

## Project Overview

### Features:
- **Create Todo**: Add new todos with a title and status (completed or not).
- **Get Todos**: Fetch all todos.
- **Update Todo**: Update an existing todo by id.

### Key Concepts:
- **Clean Architecture**: The project follows Clean Architecture guidelines, focusing on the separation of concerns and keeping business logic independent of external frameworks and tools.
- **SOLID Principles**:
  - **Single Responsibility Principle (SRP)**: Each class and module in the project has one clear responsibility (e.g., `TodoController`, `CreateTodo`, `TodoRepository`).
  - **Open/Closed Principle (OCP)**: The system can be extended with new functionality (e.g., new entities or use cases) without modifying existing code.
  - **Liskov Substitution Principle (LSP)**: Repositories and use cases can be replaced with new implementations without breaking functionality.
  - **Interface Segregation Principle (ISP)**: The repository layer uses an interface (`ITodoRepository`) to ensure that only necessary methods are exposed.
  - **Dependency Inversion Principle (DIP)**: High-level modules (e.g., use cases) depend on abstractions rather than concrete implementations, promoting flexibility.

## Project Structure

```bash
nodejs-clean-architecture-todo/
├── src/
│   ├── controllers/         # Express handlers (interfaces to the outside world)
│   ├── entities/            # Core business logic (e.g., Todo entity)
│   ├── repositories/        # Data access logic, abstracted through interfaces
│   ├── usecases/            # Application-specific business logic
│   ├── infrastructure/      # External systems (e.g., database connection)
│   └── index.js             # Application entry point
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Key Design Decisions

### Clean Architecture
The design focuses on decoupling the core business logic (entities) from the infrastructure (e.g., database, frameworks). This allows for easy scalability, testability, and flexibility, as you can change infrastructure details (e.g., swapping out databases) without affecting your core logic.

- **Entities**: Core domain objects like the `Todo` class that encapsulate business rules.
- **Use Cases**: Classes that handle business-specific logic, such as creating or updating todos.
- **Repositories**: Abstracted data access layers that follow interfaces to decouple data storage logic from the rest of the app.

### SOLID Principles in Action
- **SRP (Single Responsibility Principle)**: Each class (e.g., `TodoController`, `CreateTodo`, `TodoRepository`) has a single responsibility and encapsulates only one part of the system's functionality.
- **OCP (Open/Closed Principle)**: The repository and use case layers can be extended with new functionality without modifying existing code.
- **LSP (Liskov Substitution Principle)**: The repository interface allows for different repository implementations (e.g., different databases).
- **ISP (Interface Segregation Principle)**: The `ITodoRepository` interface ensures that only required methods are implemented by repositories.
- **DIP (Dependency Inversion Principle)**: The use cases depend on abstractions (interfaces) rather than concrete implementations, allowing for flexible and testable code.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A package manager like npm or yarn.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nodejs-clean-architecture-todo.git
   cd nodejs-clean-architecture-todo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

### API Endpoints

- `POST /todos`: Create a new todo.
- `GET /todos`: Retrieve all todos.
- `PUT /todos/:id`: Update a todo by id.

## License
This project is open-source and available under the MIT License.
