import { createReducer } from '@reduxjs/toolkit';
import { user_photo } from '../actions/userActions';

const initialState = {
    photo: ''
}
const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo,(state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        }
    )   
)

export default userReducer;