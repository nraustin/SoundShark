import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from 'react-router-dom'
import EditFormModal  from "../EditSongModal";
import DeleteSongModal from "../DeleteSongModal"
import Comments from '../Comments'
import ReactAudioPlayer from 'react-audio-player';

import * as songActions from '../../store/song'
import * as commentActions from '../../store/comment'


import './SpecificSong.css'

function SpecificSong() {

    const { songId } = useParams();
    const dispatch = useDispatch();
    
    const song = useSelector(state => state.song[songId])
    const commentObject = useSelector(state => state.comment)
    const comments = Object.values(commentObject)
    console.log(song)

      useEffect(() => {
        dispatch(songActions.getOneSong(songId))
        dispatch(commentActions.nowGetComments(songId))
      }, [dispatch, songId])

      console.log(comments[songId])
     
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
            <div>
              {comments?.map(comment => {
                  <div className='specificComment'>
                      {comment.body}
                    </div>  
              })}  
            </div>
        </>
    )
}

export default SpecificSong;