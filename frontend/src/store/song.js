
import { csrfFetch } from './csrf';

const GET_SONGS = 'song/GET_SONGS'
const GET_SONG = 'song/GET_SONG'
const NEW_SONG = 'song/NEW_SONG'
const EDITED_SONG = 'song/EDITED_SONG'
const DEL_SONG = 'song/DEL_SONG'


const getSongs = (songs) => {
    return {
        type: GET_SONGS,
        songs
    }
}

const getSong = (song) => {
    return {
        type: GET_SONG,
        song
    }
}

const newSong = (song) => {
    return {
        type: NEW_SONG,
        song
    }
}

const delSong = (song) => {
    return {
        type: DEL_SONG,
        song
    }
}

const changeSong = (song) => {
    return {
        type: EDITED_SONG,
        song
    }
}

export const getAllSongs = () => async dispatch => {
    const res = await csrfFetch(`/api/songs`)
    if(res.ok) {
        const data = await res.json();
        dispatch(getSongs(data));
        return data;
    }

}

export const getOneSong = id => async dispatch => {
    const res = await csrfFetch(`/api/songs/${id}`)
    if (res.ok) {
        const song = await res.json();
        dispatch(getSong(song));
      }

}

export const uploadSong = (song) => async (dispatch) => {
    const {userId, title, url} = song;
    const res = await csrfFetch(`/api/songs/upload`, {
        method: 'POST',
        body: JSON.stringify({
            userId,
            title,
            url,
        })
    })
    .then(response => response.json())
    .then(song => {
        dispatch(newSong(song))
        return song;
    })

}

export const editSong = song => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/edit/${song.songId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(song)
})

    if(res.ok) {
        const editedSong = await res.json()
        dispatch(changeSong(editedSong))
        return editedSong;
    }
}


export const deleteSong = id => async dispatch => {
    const res = await csrfFetch(`/api/songs/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({id})
    })
    if(res.ok){
        const songGone = await res.json();
        dispatch(delSong(songGone))
        return songGone;
    }
}
const initialState = {
}
const songReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SONGS:
            newState = {...state};
            action.songs.forEach((song) => (newState[song.id] = song));
            return newState;
        case GET_SONG:
            newState = {...state};
            newState[action.song?.id] = action.song;
            return newState;

        case NEW_SONG:
            newState = {...state};
            newState[action.song?.id] = action.song;
            return newState;

        case EDITED_SONG:
            newState = {...state};
            console.log(state)
            newState[action.song?.id] = action.song;
            return newState;

        case DEL_SONG:
            newState = {...state};
            // newState = {...state}
            delete newState[action.song.id]
            return newState
        default:
            return state;
    }
}

export default songReducer;