import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, useHistory } from 'react-router-dom'
import * as commentActions from '../../store/comment'
import * as sessionActions from '../../store/session'

import './Comments.css'

function CommentPost() {

    const dispatch = useDispatch()
    const history = useHistory();
    const { songId } = useParams();

    const sessionUser = useSelector((state) => state.session.user)
    const [addComment, setAddComment] = useState('')


    const handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = {body:addComment, songId: songId, userId: sessionUser.id}
        let res = dispatch(commentActions.nowAddComment(newComment));

        // if (res) {
        //     history.push(`/songs/${songId}`)
        // }
    }

return (
        <>
            <div className="postComment">
                <form className="newCommentForm" onSubmit={handleCommentSubmit}>
                    <textarea value={addComment} onChange={(e) => setAddComment(e.target.value)} 
                    placeholder="Add your thoughts."
                    rows='3'
                    className="commentInput"
                    required
                    >
                    </textarea>
                    <div className="addCommentButtonContainer">
                        <button className="addCommentButton" type='submit'>Add Comment</button>
                    </div>
                </form>
            </div>
        </>
)

}


export default CommentPost;