import { userService } from "../services/user-service.js"

const initialState = {
    user: userService.getLoggedinUser(),
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }
        case 'SET_USER_BALANCE':
            if (!state.user) return state
            return { ...state, user: { ...state.user, balance: action.balance } }

        default:
            return state
    }
}
