import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hook";

const initialState = {
    id: null,
    username: null,
    password:null,
    role:null,
    userLoadingStatus: "idle"
}
export const  fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (user) => {
        const {request} = useHttp();
        return await request("http://127.0.0.1:5000/login","POST", JSON.stringify(user))
    }
)



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        settingUser(state) {
          state.userLoadingStatus = true
        },
        setUser(state,action) {
            console.log(action)
            sessionStorage.setItem('token', action.payload.access_token);
            localStorage.setItem('user', action.payload.username);
            localStorage.setItem('role', action.payload.role);
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.role = action.payload.role
        },
        removeUser(state) {
            sessionStorage.removeItem('token');
            state.id = null;
            state.username = null;
            state.role = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUser.pending,state => {state.userLoadingStatus = 'loading'} )
            .addCase(fetchUser.fulfilled,(state, action) => {
                state.userLoadingStatus = 'success';
                sessionStorage.setItem('token', action.payload.access_token);
                localStorage.setItem('user', action.payload.username);
                localStorage.setItem('role', action.payload.role);
                state.id = action.payload.id;
                state.username = action.payload.username;
                state.name = action.payload.name;
                state.surname = action.payload.surname;
                state.role = action.payload.role

            })
            .addCase(fetchUser.rejected,state => {state.userLoadingStatus = 'error'} )
            .addDefaultCase(()=> {})
}
})



const {actions,reducer} = userSlice;

export default reducer

export const {
    setUser,settingUser
} = actions




