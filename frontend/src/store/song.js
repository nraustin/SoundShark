
import { csrfFetch } from './csrf';

const GET_SONGS = 'song/getSongs'
const NEW_SONG = 'song/newSong'

const getSong = (payload) => {
    console.log(payload);
    return {
        type: GET_SONGS,
        payload
    }
}

const newSong = (song) => {
    return {
        type: NEW_SONG,
        payload: song
    }
}

export const getAllSongs = () => async dispatch => {
    console.log('HERE')
    const res = await csrfFetch(`/api/songs`)
    .then(response => response.json())
    .then(payload => {
        console.log('payload', payload)
        dispatch(getSong(payload))
    })
}

export const uploadSong = (song) => async (dispatch) => {
    const {title, url} = song;
    const res = await csrfFetch(`/api/songs/upload`, {
        method: 'POST',
        body: JSON.stringify({
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
const initialState = {
    payload: []
}
const songReducer = (state = initialState, action) => {
    // Object.freeze(state);
    // let newState = Object.assign({}, state);
    let newState;
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
        case NEW_SONG:
            newState = Object.assign({}, state);
            newState.song = action.song;
            return newState;

        default:
            return state;
    }
}

export default songReducer;