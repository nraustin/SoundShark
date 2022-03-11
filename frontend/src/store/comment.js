import { csrfFetch } from './csrf';

const GET_COMMENTS = '/comment/GET_COMMENT'
const ADD_COMMENT = '/comment/ADD_COMMENT'
const EDIT_COMMENT = '/comment/EDIT_COMMENT'
const DEL_COMMENT = '/comment/DEL_COMMENT'


const getComments = (comment) => {
    return {
        type: GET_COMMENTS,
        comment
    }
}

const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

const delComment = (comment) => {
    return {
        type: DEL_COMMENT,
        comment
    }
}


export const nowGetComments = (id) => async dispatch => {
    console.log('HERE')
    const res = await csrfFetch(`/api/songs/${id}`)
    .then(response => response.json())
    .then(comment => {
        console.log('payload', comment)
        dispatch(getComments(comment))
    })
}


const initialState = {
    payload: []
}


const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_COMMENTS:
    default:
        return state;
    }
}

export default commentReducer;