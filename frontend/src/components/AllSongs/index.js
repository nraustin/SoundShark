import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from 'react-router-dom'
import * as songActions from '../../store/song'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Songs.css'

function SongList() {

    const dispatch = useDispatch()
    const { songId } = useParams();

    const songs = useSelector(state => {
        console.log(state.song.payload)
        return state.song.payload
        
        // .map(songId => state.song[songId])
      });

    useEffect(() => {
        (dispatch(songActions.getAllSongs()))
    }, [dispatch])


    return (
        <>
                {songs?.map(song => {
                    console.log(song);
                    return (
                    <ul>
                        <NavLink key={song.title} to={`/songs/${song.id}`}>
                            <div className="songContainer">
                                <img src='https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/music.png' className="songImg">
                                </img>
                                {song.title}
                            </div>
                        </NavLink>
                    </ul>
                )})}
        </>
    )
}

export default SongList;