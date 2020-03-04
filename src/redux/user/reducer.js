const initialState = {
    users: [],
    currentUser: null
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER': 
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case 'LOGIN':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                currentUser: null
            }
        default: return state;
    }
}