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
        return state.song[songId]
    })


    const handleDelete = async (e) => {
        let dispatched = dispatch(songActions.deleteSong(songId))

        if(dispatched) history.push(`/songs`)
    }
    


    return (
        <div className='deleteModalContainer'>
            <div className='thisTop'>
            <label>
             Are you sure you want to delete?   
            </label>
            </div>
            <div className='thisBottom'>
            <button onClick={handleDelete} type='submit' className='deleteTrackModalButton'>Delete Track</button>
            </div>
        </div>
      )
    }


    export default DeleteForm;