import { csrfFetch } from './csrf';

const GET_USER = '/users/GET_USER';

const getUserStuff = (users) => {
    return {
        type: GET_USER,
        users
    }
}


export const getUsers = () => async (dispatch) => {
    const res = await csrfFetch('/api/users/')
    if (res.ok) {
        const users = await res.json();
        dispatch(getUserStuff(users));
        return users
    }
}

const initialState = {

};

const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_USER: {
            newState = {...state};
            action.users.forEach(user => {
                newState[user.id] = user
            })
            return newState
        }
        default:
            return state;
    }
}

export default userReducer;