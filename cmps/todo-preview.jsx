const { Link } = ReactRouterDOM
export function TodoPreview({ todo, onRemoveTodo, onMarkTodo }) {
    return <section className="todo-preview">
        <ul onClick={() => onMarkTodo(todo._id)}>
            <hr />
            <li>{todo.title}</li>
            <li>{todo.txt}</li>

            {(todo.isActive) ?
                <li>{todo.isActive && 'Active'}</li> :
                <li>{!todo.isActive && ' Done!'}</li>
            }
            <li><button onClick={() => onRemoveTodo(todo._id)}>x</button></li>



            <Link to={`/todo/${todo._id}`}>
                <button>Details</button>
            </Link><br />
            <Link to={`/todo/edit/${todo._id}`}>
                <button>Edit</button>
            </Link>
        </ul>
    </section>
}