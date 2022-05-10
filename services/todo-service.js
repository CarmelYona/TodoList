
import { storageService } from './async-stoarge-service.js'
import { utilService } from './util-service.js'
import { userService } from './user-service.js'

const STORAGE_KEY = 'todoDB'

export const todoService = {
    query,
    getById,
    save,
    remove,
    getEmptyTodo
}


function query() {

    // return axios.get(BASE_URL).then(res => res.data)
    return storageService.query(STORAGE_KEY)
}
function getById(todoId) {
    return storageService.get(STORAGE_KEY, todoId)
}
function remove(todoId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, todoId)
}
function save(todo) {
    if (todo._id) {
        return storageService.put(STORAGE_KEY, todo)
    } else {
        // when switching to backend - remove the next line
        todo.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, todo)
    }
}

function getEmptyTodo() {
    return {
        title: 'Todo',
        txt: 'Edit me ',
    }
}

// TEST DATA
// storageService.post(STORAGE_KEY, { title: 'Todo', txt: 'get it done', isActive: (Math.random() < 0.5) ? false : true }).then(x => console.log(x))


