import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from 'react-router-dom'
import EditFormModal  from "../EditSongModal";
import DeleteSongModal from "../DeleteSongModal"
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'

import * as songActions from '../../store/song'
import H5AudioPlayer from "react-h5-audio-player";
import './SpecificSong.css'

function SpecificSong() {

    const { songId } = useParams();
    const dispatch = useDispatch();
    
    const song = useSelector(state => {
        console.log(state.song)
        return state.song[songId]
    })
    console.log(song)

      useEffect(() => {
        (dispatch(songActions.getOneSong(song.id)))
      }, [dispatch], song.id)
     
    return(
        <>
            <div className='song-title'>
                {song.title}
            </div>
            <div className='audio-player'>
                <div className="actual-player">
                <ReactAudioPlayer
                src={song.url}
                controls
                />
                </div>
                <div className="edit-and-delete">
                <EditFormModal />
                <DeleteSongModal songParent={song}/>
                </div>
            </div>
        </>
    )
}

export default SpecificSong;