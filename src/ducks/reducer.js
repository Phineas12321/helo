const initialState = {
    user: {}
    /*
    username,
    user_id,
    profile_pic
    */
}

const GET_USER = 'GET_USER'

export function getUser(userObj){
    return {
        type: GET_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch (type){
        default:
            return state
    }
}