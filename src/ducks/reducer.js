const initialState = {
    username: '',
    user_id: 0,
    profile_pic: ''
}

const GET_USER = 'GET_USER'

export function getUser(username, user_id, profile_pic){
    return {
        type: GET_USER,
        payload: {
            username,
            user_id,
            profile_pic
        }
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch (type){
        case GET_USER:
            return {...state, username: payload.username, user_id: payload.user_id, profile_pic: payload.profile_pic}
        default:
            return state
    }
}