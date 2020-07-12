
//action

import { SAVE_USERDETAILS } from './UserdetType'


//action creator
export const saveuserdetail = (details) => {
    return{
        type:SAVE_USERDETAILS,
        payload:details,
    }

}