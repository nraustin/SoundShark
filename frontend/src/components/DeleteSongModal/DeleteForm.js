import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import * as songActions from '../../store/song'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, Link, useHistory } from 'react-router-dom';

function DeleteForm({songParent}) {

    const dispatch = useDispatch();
    const history = useHistory()
    
    const { songId } = useParams();

    const song = useSelector(state => {
        console.log(state.song)
        return state.song[songId]
    })
    console.log(song)

    console.log(songId)


    const handleDelete = async (e) => {
        let dispatched = dispatch(songActions.deleteSong(songId))

        if(dispatched) history.push(`/songs`)
    }
    


    return (
        <div>
            <button to='/songs' onClick={handleDelete} type='submit' className='deleteTrackModalButton'>Delete Track</button>
        </div>
      )
    }


    export default DeleteForm;