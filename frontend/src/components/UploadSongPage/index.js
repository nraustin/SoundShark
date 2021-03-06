import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, Link, useHistory } from "react-router-dom";
import * as songActions from "../../store/song";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import "./UploadSong.css"


function UploadSong() {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [playlist, setPlaylist] = useState('');
    

    if (!sessionUser) return <Redirect to="/" />;
    const userId = sessionUser.id


    const handleSubmit = (e) => {
        e.preventDefault();
        let dispatched = dispatch(songActions.uploadSong({ userId, title, url }))

        if(dispatched) history.push('/songs')
      };


    return (
        <div className="uploadSongContainer">
            <form onSubmit={handleSubmit} className="trackSubmitForm">
            <div className="titleInput">
                    <label>
                    Track Title
                    </label>
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
            </div>
            <div className="urlInput">
                    <label>
                    Track URL
                    </label>
                    <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    />
                
            </div>
            <div className="buttonContainer">
            <button to='/songs' className='uploadSongButton' type="submit">UPLOAD TRACK</button>
            </div>
            </form>
        </div>
    )

}

export default UploadSong;