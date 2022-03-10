import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from 'react-router-dom'
import * as songActions from '../../store/song'

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
                        {song.title}
                        </NavLink>
                    </ul>
                )})}
        </>
    )
}

export default SongList;