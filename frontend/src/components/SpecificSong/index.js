import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'

import * as songActions from '../../store/song'
import H5AudioPlayer from "react-h5-audio-player";
import './SpecificSong.css'

function SpecificSong() {

    const { songId } = useParams();
    const dispatch = useDispatch();
    
    const song = useSelector(state => {
        return state.song[songId]
    })
    console.log(song.id)


    const handleSubmit= (e) => {
        dispatch(songActions.deleteSong(song.id))
    }

    //   useEffect(() => {
    //     (dispatch(songActions.getOneSong(song.id)))
    //   }, [dispatch, song.id])
     
    return(
        <>
            <div className='song-title'>
                {song.title}
            </div>
            <div className='audio-player'>
                <ReactAudioPlayer className="actual-player"
                src={song.url}
                controls
                />
                <button onClick={handleSubmit}>Delete?</button>
            </div>
        </>
    )
}

export default SpecificSong;