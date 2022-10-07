import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IgithubState {
    likedRepos: string[]
}

const initialState: IgithubState = {
    likedRepos: JSON.parse(localStorage.getItem('likedRepos') ?? '[]')
}

const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addRepo(state, action: PayloadAction<string>) {
            state.likedRepos.push(action.payload);
            localStorage.setItem('likedRepos', JSON.stringify(state.likedRepos));
        },

        removeRepo(state, action: PayloadAction<string>) {
            state.likedRepos = state.likedRepos.filter(el => el !== action.payload);
            localStorage.setItem('likedRepos', JSON.stringify(state.likedRepos));
        }
    }
})

export const githubActions = githubSlice.actions
export default githubSlice.reducer
