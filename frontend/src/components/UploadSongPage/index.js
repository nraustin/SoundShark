import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songActions from "../../store/song";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import "./UploadSong.css"


function UploadSong() {

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [playlist, setPlaylist] = useState('');
    

    if (!sessionUser) return <Redirect to="/" />;
    const userId = sessionUser.id


    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(songActions.uploadSong({ userId, title, url }))
      };


    const Player = () => (
        <AudioPlayer
          autoPlay
          src="http://example.com/audio.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
    )

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Track Title
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
        </label>
        <label>
            Track URL
            <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            />
        </label>
        <label>
            Add to Playlist?
            <input
            type="password"
            value={playlist}
            onChange={(e) => setPlaylist(e.target.value)}
            />
        </label>
        <button type="submit">Upload Track</button>
        </form>
    )

}

export default UploadSong;