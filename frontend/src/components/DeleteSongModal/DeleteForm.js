import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import * as songActions from '../../store/song'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

function DeleteForm({songId}) {
    const dispatch = useDispatch;
    // const { songId } = useParams();

    // const song = useSelector(state => {
    //     console.log(state.song)
    //     return state.song[songId]
    // })
    // console.log(song)


    const handleDelete= (e) => {
        dispatch(songActions.deleteSong(songId))
    }


    return (
        <div>
            <button onClick={handleDelete}>
                Delete Track
            </button>
        </div>
      )
    }


    export default DeleteForm;