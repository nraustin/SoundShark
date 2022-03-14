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
        return comments;
    }
}

export const nowDeleteComment = (id) => async dispatch => {
    const res = await csrfFetch(`/api/comments/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({id})
    })
    if(res.ok){
        const deletedComment = await res.json();
        dispatch(delComment(deletedComment))
        return deletedComment;
    }
}

export const nowAddComment = (comment) => async dispatch => {
    const res = await csrfFetch('/api/comments', {
        method: "POST",
        headers: {
        "Content_Type":"application/json"
         },
        body: JSON.stringify(comment)
    })
    const newComment = await res.json()
    dispatch(addComment(newComment))
}

export const nowEditComment = (comment) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${comment.songId}/${comment.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })

    if (res.ok) {
    const editedComment = await res.json()
    dispatch(updateComment(editedComment))
}}


const initialState = {
    
}


const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_COMMENTS:
            newState = {...state};
            action.comments?.forEach((comment) => (newState[comment.id] = comment));
            return newState
        case ADD_COMMENT:
            // newState = Object.assign({}, state);
            // newState.comment = action.comment;
            // return newState
            newState = {...state};
            newState[action.comment?.id] = action.comment
            return newState
        case DEL_COMMENT:
            newState = {...state};
            delete newState[action.comment?.id]
            return newState
        case EDIT_COMMENT:
            newState = {...state};
            newState[action.comment?.id] = action.comment
            return newState

    default:
        return state;
    }
}

export default commentReducer;