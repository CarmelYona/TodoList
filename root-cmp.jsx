const { Switch, Route } = ReactRouterDOM
import routes from './routes.js'

import {AppHeader} from './cmps/app-header.jsx'
// import {AppFooter} from './cmps/app-footer.jsx'

export class RootCmp extends React.Component {

    render() {
        return <div>
            <AppHeader />
            <main>
                <Switch>
                    {routes.map(route=> <Route key={route.path} exact component={route.component} path={route.path} /> )}
                </Switch>
            </main>
            {/* <AppFooter /> */}
        </div>

    }
}


