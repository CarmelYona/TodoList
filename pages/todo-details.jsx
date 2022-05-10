import { todoService } from "../services/todo-service.js"
const { Link } = ReactRouterDOM
export class TodoDetails extends React.Component {
    state = {
        todo: null
    }

    componentDidMount() {
        const { todoId } = this.props.match.params
        todoService.getById(todoId)
            .then(todo => {
                console.log('Todos from DB:', todo)
                this.setState({ todo })
            })
    }

    render() {
        const { todo } = this.state
        if (!todo) return <div>loding..</div>
        console.log(todo)
        return <section className="todo-details">
            <hr />
            <h1>{todo.title}</h1>
            <h5>{todo.txt}</h5>
            <hr />
            <button><Link to={'/todos'}>⬅</Link></button>
        </section>
    }
}