const GET_SONG = 'song/getSong'
const NEW_SONG = 'song/newSong'

const getSong = () => {
    return {
        type: GET_SONG,
    }
}

const newSong = (song) => {
    return {
        type: NEW_SONG,
        payload: song
    }
}

const initialState = { song: null}

const songReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SONG:
        case NEW_SONG:
        default:
            return state;
    }
}

export default songReducer;