import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import * as songActions from '../../store/song'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

function EditForm() {
    
    const { songId } = useParams();

    const song = useSelector(state => {
        console.log(state.song)
        return state.song[songId]
    })

    const [newUrl, setNewUrl] = useState(song.url);
    const [newTitle, setNewTitle] = useState(song.title)
    console.log(song.title)

    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id

    const dispatch = useDispatch();

    const handleEdit = async (e) => {
        e.preventDefault();
        const newSong = { newUrl, newTitle, userId, songId }
        console.log(newSong)
        dispatch(songActions.editSong(newSong))
    }

    return (
        <form onSubmit={handleEdit}>
            <label>New Track Name 
                <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
            </label>
            <label>New Track URL
                <input type='text' value={newUrl} onChange={(e) => setNewUrl(e.target.value)} required />
            </label>
            <button type='submit'>Update Track</button>
        </form>
      )
    }

    export default EditForm;