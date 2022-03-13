import { csrfFetch } from './csrf';

const GET_COMMENTS = '/comment/GET_COMMENT'
const ADD_COMMENT = '/comment/ADD_COMMENT'
const EDIT_COMMENT = '/comment/EDIT_COMMENT'
const DEL_COMMENT = '/comment/DEL_COMMENT'


const getComments = (comments) => {
    return {
        type: GET_COMMENTS,
        comments
    }
}

const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

const updateComment = (comment) => {
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


export const nowGetComments = (songId) => async dispatch => {
    console.log('HERE')
    const res = await csrfFetch(`/api/comments/${songId}`)
    if(res.ok){
        const comments = await res.json();
        dispatch(getComments(comments))
    }
}

export const nowAddComment = (comment) => async dispatch => {
    const res = await csrfFetch('/api/comments', {
        method: "POST",
        headers: {
        "Content_Type": "application/json"
         },
        body: JSON.stringify(comment)
    })
    const newComment = await res.json()
    dispatch(addComment(newComment))
}


const initialState = {
    comments: []
}


const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_COMMENTS:
            newState = {...state}
            action.comments.forEach((comment) => (newState[comment.id] = comment));
            return newState

        case ADD_COMMENT:
            newState = {...state}
            newState[action.comment?.id] = action.comment
            return newState
    default:
        return state;
    }
}

export default commentReducer;