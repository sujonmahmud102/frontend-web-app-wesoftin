import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    selectedUser: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUsers: (state, action) => {
            state.users = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
});

export const {
    fetchUsers,
    setSelectedUser
} = userSlice.actions;

export default userSlice.reducer