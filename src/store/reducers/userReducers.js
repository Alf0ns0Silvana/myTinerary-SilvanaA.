import { createReducer } from '@reduxjs/toolkit';
import { user_photo } from '../actions/userActions';

const initialState = {
    name: 'Pocahontas',
    photo: 'https://thumbs.dreamstime.com/b/mujer-feliz-que-destaca-con-ambas-manos-39096339.jpg'
}
const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo,(state, action) => {
            return {
                ...state,
                photo: action.payload.photo,
                name: action.payload.name
            }
        }
    )   
)

export default userReducer; // es el unico q puede modificar el store,
//recibe la info del action, hace la logica para modificar un componente