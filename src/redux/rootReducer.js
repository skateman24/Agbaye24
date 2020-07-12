import {combineReducers} from 'redux';

import UsersetReducer from './Userdetails/UserdetReducer'

const rootReducer = combineReducers({
    UserDetails : UsersetReducer,
   // icecream : icecreamReducer,
    //user : userReducer
})

export default rootReducer