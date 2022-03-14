import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, Link, useHistory } from 'react-router-dom'
import EditFormModal  from "../EditSongModal";
import DeleteSongModal from "../DeleteSongModal"
import CommentPost from '../PostComment'
import ReactAudioPlayer from 'react-audio-player';
import Waveform from "../WaveFormerC";

import * as songActions from '../../store/song'
import * as commentActions from '../../store/comment'
import * as userActions from '../../store/user'


import './SpecificSong.css'

function SpecificSong() {

    const { songId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    
    const song = useSelector((state) => state.song[songId])
    const commentObject = useSelector((state) => state.comment)
    const sessionUser = useSelector(state => state.session.user);
    const userObject = useSelector((state) => state.userST)

    const users = Object.values(userObject)
    const comments = Object.values(commentObject)

    console.log(commentObject)
    console.log(comments)
    console.log(users)
    console.log(sessionUser)

      useEffect(() => {
        dispatch(songActions.getOneSong(songId))
        dispatch(commentActions.nowGetComments(songId))
        dispatch(userActions.getUsers())
      }, [dispatch, songId])

      const handleCommentDelete = async(id) => {
        let res = dispatch(commentActions.nowDeleteComment(id))

        if (res) {
            history.push(`/songs/${songId}`)
        }
     }

     const getUsernames = (userId) => {
        const username = users.find(user => (
            user.id === userId
        ))

        return username?.username
     }
     
    return(
        <div className="content">
            <div className='song-title'>
                {song?.title}
            </div>
            <div className='audio-player'>
                <div className="actual-player">
                <ReactAudioPlayer
                src={song?.url}
                controls
                />
                </div>
            <div className="edit-and-delete">
                {sessionUser.id == song?.userId ?
                    <div className="buttonArrangement">
                        <div className="editButtonDiv">
                            <EditFormModal />
                        </div>
                        <div className="deleteButtonDiv">
                            <DeleteSongModal />
                        </div>
                    </div> : null}
            </div>
            </div>
                    <div className="commentsContainer">
                        <div className="commentContainer">
                            <CommentPost/>
                            {comments?.map(comment => {
                                return (  
                                    <>
                                    {songId == comment?.songId ?
                                        <div className='specificComment'>
                                            
                                            <>
                                                <div className="commentUsername">
                                                    {getUsernames(comment?.userId)}
                                                    
                                                    {sessionUser?.id == comment.userId ? 
                                                        <>
                                                            <button type='button'>Edit</button>
                                                            <button onClick={() => handleCommentDelete(comment.id)} className="deleteComment">Delete</button>

                                                        </> : null}
                                                    
                                                </div>
                                                <div className="commentBody">
                                                    {comment.body}
                                                </div> 
                                                </> 
                                        </div> : null }
                                    </>
                            )})}   
                        </div>
                    </div>
                </div>
    )
}

export default SpecificSong;