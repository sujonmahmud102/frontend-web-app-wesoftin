import {
    createSlice
} from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        setUsers: (state, action) => {
            return action.payload;
        }
    },
});

export const {
    setUsers
} = userSlice.actions;

export default userSlice.reducer