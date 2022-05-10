const { connect } = ReactRedux
import { todoService } from "../services/todo-service.js"
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { TodoList } from "../cmps/todo-list.jsx"
import { TodoFilter } from "../cmps/todo-filter.jsx"

import { loadTodos, removeTodo, saveTodo, setFilter } from "../store/todo-action.js"



class _TodoApp extends React.Component {
    componentDidMount() {
        this.props.loadTodos()
    }

    onRemoveTodo = (todoId) => {
        this.props.removeTodo(todoId)
    }

    onAddTodo = () => {
        const title = prompt('Title:')
        const txt = prompt('Todo Text:')
        const isActive = false
        const todo = { title, txt, isActive }
        this.props.saveTodo(todo)
    }

    onSetFilter = ({ target }) => {
        const val = target.value
        this.props.setFilter(val)
    }

    todosToShow() {
        const { todos, filterBy } = this.props
        let todosToShow = todos
        if (filterBy === 'active') {
            todosToShow = todos.filter(todo => todo.isActive)
        } else if (filterBy === 'done') {
            todosToShow = todos.filter(todo => !todo.isActive)
        }
        return todosToShow
    }

    onMarkTodo = (todoId) => {
        console.log(todoId)
        // todoService.getById(todoId)
        //     .then(todo => {
        //         todo.isActive = !todo.isActive
        //         todoService.save(todo)
        //     })
        // const todos = this.todosToShow()
        // this.props.dispatch({
        //     type: 'SET_TODOS',
        //     todos
        // })
    }


    render() {
        const todos = this.todosToShow()
        // const { todos, filterBy } = this.props
        if (!todos) return <div>loding..</div>
        console.log(todos)
        return <section className="todo-app">
            <TodoFilter onSetFilter={this.onSetFilter} />
            <TodoList todos={todos} onMarkTodo={this.onMarkTodo} onRemoveTodo={this.onRemoveTodo} />
            <button onClick={this.onAddTodo}>Add Todo 👍</button>
        </section>
    }
}

const mapStateToProps = (storeState) => {
    return {
        todos: storeState.todoModule.todos,
        filterBy: storeState.todoModule.filterBy
    }
}

const mapDispatchToProps = {
    loadTodos,
    removeTodo,
    saveTodo,
    setFilter
}

export const TodoApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(_TodoApp)
