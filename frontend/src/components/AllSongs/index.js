import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from 'react-router-dom'
import * as songActions from '../../store/song'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Songs.css'

function SongList() {

    const dispatch = useDispatch()
    const { songId } = useParams();

    const songsObj = useSelector(state => {
        console.log(state.song)
        return state.song.payload
        // .map(songId => state.song[songId])
      });
    
    const songs = Object.values(songsObj)

    useEffect(() => {
        (dispatch(songActions.getAllSongs()))
    }, [dispatch])


    return (
        <>
        <div className='songsContainer'>
                {songs?.map(song => {
                    console.log(song);
                    return (
                        <NavLink key={song.id} to={`/songs/${song.id}`} className='songContainer'>
                            <div className="image-and-title">
                                <img src='https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/music.png' className="songImg">
                                </img>
                                <div className="title">
                                {song.title}
                                </div>
                            </div>
                        </NavLink>
                )})}
        </div>
        <div className="just-for-space">
        </div>
        </>
    )
}

export default SongList;