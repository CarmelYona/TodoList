const { connect } = ReactRedux
import { removeTodo, saveTodo } from "../store/todo-action.js"
import { todoService } from "../services/todo-service.js"
import { TodoDetails } from "./todo-details.jsx"
const { Link } = ReactRouterDOM
export class _TodoEdit extends React.Component {

    state = {
        todo: {
            title: '',
            txt: '',
            isActive: ''
        },
        isOpen: false
    }
    componentDidMount() {
        const { todoId } = this.props.match.params
        todoService.getById(todoId)
            .then(todo => {
                console.log('Todos from DB:', todo)
                this.setState({ todo })
            })
    }

    onSaveTodo = () => {
        const { todo } = this.state
        this.props.saveTodo(todo)
    }

    handelChange = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value
        const field = target.name
        this.setState((prevState) => ({ todo: { ...prevState.todo, [field]: value } }))
    }

    toggleTodo = () => {
        const { todo } = this.state
        const isActive = !this.state.todo.isActive
        todo.isActive = isActive
        this.setState({ todo })
        this.onSaveTodo()
    }

    toggleModal = () => {
        const isOpen = !this.state.isOpen
        this.setState({ isOpen })
    }

    render() {
        const { todo, isOpen } = this.state
        const { title, txt } = this.state.todo
        if (!todo) return <div>loding..</div>
        console.log(todo)
        return <section className="todo-details">
            {(todo.owner) ?
                <h2>Hello: {todo.owner.username}</h2> :
                <h2> </h2>
            }
            <hr />
            <h2>{title}</h2>
            <h3>{txt}</h3>
            {(todo.isActive) ?
                <h3 className="todo-isactive" onClick={this.toggleTodo}>{todo.isActive && 'Active'}</h3> :
                <h3 className="todo-isactive" onClick={this.toggleTodo}>{!todo.isActive && ' Done!'}</h3>
            }
            <hr />
            <button onClick={() => this.toggleModal()}>{isOpen ? 'x' : '...'}</button>
            {isOpen && <div className="edit-modal">
                <div className="edit-container">
                    <input className="edit-input" type="text" placeholder="Enter bug title" onChange={this.handelChange} name={'title'} value={title}></input>
                    <br /><input className="edit-input" type="text" placeholder="Enter bug text" onChange={this.handelChange} name={'txt'} value={txt}></input>
                    <br /><button onClick={this.onSaveTodo}>Save!</button>
                </div>
            </div>}
            <br /><button><Link to={'/todos'}>⬅</Link></button>
        </section>
    }
}


const mapStateToProps = (storeState) => {
    return {
        todos: storeState.todoModule.todos,
    }
}

const mapDispatchToProps = {
    removeTodo,
    saveTodo,
}

export const TodoEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(_TodoEdit)
