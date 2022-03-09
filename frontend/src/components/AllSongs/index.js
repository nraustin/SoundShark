import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import * as songActions from '../../store/song'

function SongList() {

    const dispatch = useDispatch()
    const { songId } = useParams();

    let songs = useSelector(state => {
        console.log(state.song.payload)
        return state.song.payload;
      });

    useEffect(() => {
        (dispatch(songActions.getAllSongs()))
    }, [dispatch])


    return (
        <>
            <p>
                {songs.map(song => {
                    console.log(song);
                    return <p key={song.id}>{song.title}</p>
                })}
            </p>
        </>
    )
}

export default SongList;