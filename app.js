const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux;
const history = History.createBrowserHistory()

import { store } from "./store/store.js";
import { RootCmp } from './root-cmp.jsx'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <RootCmp />
        </Router>
    </Provider>,
    document.getElementById('root')
)




