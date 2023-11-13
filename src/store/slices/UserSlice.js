import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUserReducer(state, action) {
            console.log('8:', action.payload);
            state.push(action?.payload);
        },
        removeUserReducer(state, action) {},
        deleteUsersReducer(state, action) {},
    }
});

export { usersSlice };
export const { addUserReducer } = usersSlice.actions;