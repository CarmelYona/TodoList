// import {HomePage} from './pages/home-page.jsx'
// import {AboutUs} from './pages/about-us.jsx'
import { Home } from "./pages/home.jsx"
import { TodoApp } from "./pages/todo-app.jsx"
import { TodoDetails } from "./pages/todo-details.jsx"
import { TodoEdit } from "./pages/todo-edit.jsx"

export default [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/todos',
        component: TodoApp,
    },
    {
        path: '/todo/:todoId',
        component: TodoDetails,
    },
    {
        path: '/todo/edit/:todoId',
        component: TodoEdit,
    }
]