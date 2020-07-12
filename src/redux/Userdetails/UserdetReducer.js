
//action
import {SAVE_USERDETAILS} from './UserdetType'

const initialstate = {
    userdetails: {}
}

const UsersetReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SAVE_USERDETAILS:return{
            ...state,
            userdetails : action.payload
        }
        default: return state
            
    }
}

export default UsersetReducer