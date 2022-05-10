const initialState = {
    todos: [],
    filterBy: ''
}

export function todoReducer(state = initialState, action) {
    var todos
    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.todos }
        case 'REMOVE_TODO':
            todos = state.todos.filter(todo => todo._id !== action.todoId)
            return { ...state, todos }
        case 'ADD_TODO':
            todos = [action.todo, ...state.todos]
            return { ...state, todos }
        case 'UPDATE_TODO':
            todos = state.todos.map(currTodo =>
                (currTodo._id === action.todo._id) ? action.todo : currTodo)
            return { ...state, todos }
        case 'TODO_FILTER':
            return { ...state, filterBy: action.val }
        default:
            return state
    }
}
