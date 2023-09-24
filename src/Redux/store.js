import {
    configureStore
} from "@reduxjs/toolkit";
import userReducer from '../Redux/features/user/userSlice'


const store = configureStore({
    reducer: {
        users: userReducer
    }
})

export default store;