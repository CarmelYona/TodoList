import { func } from 'prop-types'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { todoService } from "../services/todo-service.js"

export function loadTodos() { // Action Creator
    return dispatch => {
        return todoService.query()
            .then(todos => {
                const action = {
                    type: 'SET_TODOS',
                    todos
                }
                dispatch(action)
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot load todos')
            })
    }
}

export function removeTodo(todoId) { // Action Creator
    return (dispatchPlease, getTheState) => {
        console.log('THE STATE IS', getTheState())
        todoService.remove(todoId)
            .then(() => {
                console.log('Deleted Succesfully!');
                // After async operation is done - dispatch an action to the reducer
                dispatchPlease({
                    type: 'REMOVE_TODO',
                    todoId
                })
                showSuccessMsg('Todo removed')
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot remove todo')
            })
    }
}

export function saveTodo(todo) { // Action Creator
    return dispatch => {
        const actionType = (todo._id) ? 'UPDATE_CAR' : 'ADD_TODO'
        todoService.save(todo)
            .then(savedTodo => {
                dispatch({ type: actionType, todo: savedTodo })
                showSuccessMsg('Todo saved')
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot save todo')
            })
    }
}

export function setFilter(val) {
    return dispatch => {
        console.log(val)
        return todoService.query()
            .then(todos => {
                console.log('Todos from DB:', todos)
                const action = {
                    type: 'TODO_FILTER',
                    val,
                }
                dispatch(action)
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot load todos')
            })
    }
}