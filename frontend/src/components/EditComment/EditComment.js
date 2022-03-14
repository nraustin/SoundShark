import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import * as songActions from '../../store/song'
import * as commentActions from '../../store/comment'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';

function EditComment({commentS}) {
    
    const { songId, commentId } = useParams();
    const history = useHistory();

    const song = useSelector(state => {
        return state.song[songId]
    })

    const comment = useSelector(state => state.comment);

    const [newBody, setNewBody] = useState(comment[commentId]);

    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id

    const dispatch = useDispatch();

    const handleEditComment = async (e) => {
        e.preventDefault();
        const editedComment = {id: commentId, userId: sessionUser.id, songId: song[songId].id, body: comment ? newBody : null}

        return dispatch(commentActions.nowEditComment(editedComment))
        
    }

    const onClick = () => {
        history.push(`/songs/${songId}`)
    }

return (
    <>
        <div className="postContainer">
            <form className="postInputs" onSubmit={handleEditComment}>
                <textarea
                    value={newBody}
                    onChange={(e) => setNewBody(e.target.value)}
                    name="body"
                    rows="5"
                    className="descriptionInput"
                ></textarea>
                <div className="postButtonContainer">
                    <button className="postButton" type="submit">Submit</button>
                    <button onClick={onClick} className="cancelButton">Cancel</button>
                </div>
            </form>
        </div>
    </>
      )
}

export default EditComment;