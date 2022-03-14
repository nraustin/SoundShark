
import { csrfFetch } from './csrf';

const GET_SONGS = 'song/GET_SONGS'
const GET_SONG = 'song/GET_SONG'
const NEW_SONG = 'song/NEW_SONG'
const EDITED_SONG = 'song/EDITED_SONG'
const DEL_SONG = 'song/DEL_SONG'


const getSongs = (payload) => {
    console.log(payload);
    return {
        type: GET_SONGS,
        payload
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
        payload: song
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
    console.log('HERE')
    const res = await csrfFetch(`/api/songs`)
    .then(response => response.json())
    .then(payload => {
        console.log('payload', payload)
        dispatch(getSongs(payload))
    })
}

export const getOneSong = id => async dispatch => {
    console.log('IM HERE')
    const res = await csrfFetch(`/api/songs/${id}`)
    if (res.ok) {
        const song = await res.json();
        dispatch(getSong(song));
      }
    // .then(response => response.json())
    // .then(song => {
    //     dispatch(getSong(song))
    // })
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
        console.log('song', song)
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
    console.log('----hit-----')
    const res = await csrfFetch(`/api/songs/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({id})
    })
    if(res.ok){
        const songGone = await res.json();
        dispatch(delSong(songGone))
    }
}
const initialState = {
    payload: []
}
const songReducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
        case GET_SONGS:
            const allSongs = {};
            action.payload.forEach(song => {
                allSongs[song.id] = song;
            });
            console.log(action.payload)
            return {
                ...allSongs,
                ...state,
                payload: action.payload,
            }
        case GET_SONG:
            return {
                ...state,
                [action.song.id]: {
                  ...state[action.song.id],
                  ...action.song,
                },
              };
        case NEW_SONG:
            newState = Object.assign({}, state);
            newState.song = action.song;
            return newState;
        case EDITED_SONG:
            newState = Object.assign({}, state);
            newState.song = action.song;
            return newState;
        case DEL_SONG:
            delete newState[action.song.id]
            return newState
        default:
            return state;
    }
}

export default songReducer;