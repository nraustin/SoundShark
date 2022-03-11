import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from 'react-router-dom'
import * as commentActions from '../../store/comments'

import './Comments.css'

function CommentList() {

    const dispatch = useDispatch()
    const { songId } = useParams();

    const comments = useSelector(state => {
        console.log(state.comment.comment)
        return state.comment.comment
        
        // .map(songId => state.song[songId])
      });

    // useEffect(() => {
    //     (dispatch(songActions.getAllSongs()))
    // }, [dispatch])
}
