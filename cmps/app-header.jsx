const { NavLink } = ReactRouterDOM
const { connect } = ReactRedux

import { signup, login, logout } from '../store/user-action.js'

import { UserMsg } from './user-msg.jsx'
import { LoginSignup } from '../pages/login-signup.jsx'

class _AppHeader extends React.Component {
    state = {}
    componentDidMount() { }
    onLogin = (credentials) => {
        this.props.login(credentials)
    }
    onSignup = (credentials) => {
        this.props.signup(credentials)
    }
    onLogout = () => {
        this.props.logout()
        const { user } = this.props
        confirm('Hi ' + user.username + ', \n' + 'You Want To Logout?') ? this.props.logout() : ''
    }

    render() {
        const { user } = this.props
        return (
            <header>
                <UserMsg />
                <nav>
                    <NavLink to="/">Home</NavLink> |
                    {/* <NavLink to="/about">About</NavLink> */}
                </nav>
                <h1>My App</h1>
                {user && <section className="user-info">
                    <p>{user.fullname} <span>${user.balance}</span></p>
                    <NavLink to="/todos"><button>Todos App</button> </NavLink><br />
                    <NavLink to="/"> <button onClick={this.onLogout}> Logout</button></NavLink>
                </section>}
                {!user && <section className="user-info">
                    <LoginSignup onLogin={this.onLogin} onSignup={this.onSignup} />
                </section>}

            </header>
        )
    }
}
const mapStateToProps = (storeState) => {
    return {
        user: storeState.userModule.user
    }
}

const mapDispatchToProps = {
    signup,
    login,
    logout
}


export const AppHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(_AppHeader)