import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts(state, action) {
            state.posts = action.payload;
            state.loading = false;
        },
        fetchPostById(state, action) {
            const post = state.posts.find((p) => p.id === action.payload);
            return post || null;
        },
    }
});

export const { fetchPosts, fetchPostById } = posts.actions;
export default posts.reducer