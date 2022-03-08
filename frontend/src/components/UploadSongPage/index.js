import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import "./UploadSong.css"

function UploadSong() {
    return (
            <AudioPlayer
              autoPlay
              src="http://example.com/audio.mp3"
              onPlay={e => console.log("onPlay")}
              // other props here
            />
          );

}

export default UploadSong;