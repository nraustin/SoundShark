import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from 'react-router-dom'
import EditFormModal  from "../EditSongModal";
import DeleteSongModal from "../DeleteSongModal"
import CommentPost from '../PostComment'
import ReactAudioPlayer from 'react-audio-player';

import * as songActions from '../../store/song'
import * as commentActions from '../../store/comment'
import * as userActions from '../../store/session'


import './SpecificSong.css'

function SpecificSong() {

    const { songId } = useParams();
    const dispatch = useDispatch();
    
    const song = useSelector((state) => state.song[songId])
    const commentObject = useSelector((state) => state.comment)
    const sessionUser = useSelector(state => state.session.user);
    const comments = Object.values(commentObject)

    console.log(commentObject)
    console.log(sessionUser)

      useEffect(() => {
        dispatch(songActions.getOneSong(songId))
        dispatch(commentActions.nowGetComments(songId))
      }, [dispatch, songId])
     
    return(
        <>
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
                <EditFormModal />
                <DeleteSongModal songParent={song}/>
                </div>
            </div>
            <div className="commentsContainer">
                <div className="commentContainer">
                    <CommentPost/>
                    {comments?.map(comment => {
                        return (
                            <>
                            {comment.songId == songId ?
                                <div className='specificComment'>
                                        <div className="commentUsername">
                                            {sessionUser.username}
                                        </div>
                                        <div className="commentBody">
                                            {comment.body}
                                        </div> 
                                </div>
                            : null }
                            </>
                    )})}   
                </div>
            </div>
        </>
    )
}

export default SpecificSong;