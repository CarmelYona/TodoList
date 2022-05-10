import { TodoPreview } from "./todo-preview.jsx";


export function TodoList({ todos, onRemoveTodo, onMarkTodo }) {
    return <section className="todo-list">
        {todos.map((todo, idx) => <TodoPreview key={idx} todo={todo} onMarkTodo={onMarkTodo} onRemoveTodo={onRemoveTodo} />)}
    </section>
}