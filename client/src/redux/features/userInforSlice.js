import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
import {SERVER_URL} from "../../ConstantValue"

export const login = createAsyncThunk(
    'users/login',
    async (loginUserState, thunkAPI) => {
        const response = await axios.post(`${SERVER_URL}auth/login`, loginUserState, {
            headers: {
                "Content-Type": "Application/json"
            }
        }).catch(error => {
            return error.response;
        });

        if(response.status !== 200){
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }
)

export const register = createAsyncThunk(
    'users/register',
    async (RegistUserState) => {
        const response = await axios.post(`${SERVER_URL}auth/register`, RegistUserState, {
            headers: {
                "Content-Type": "Application/json"
            }
        }).catch(error => {
            return error.response;
        });
        return response
    }
)
const initialState =  {
    user: {},
    token: "",
    loading: false,
    errors: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => (
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(register.fulfilled, (state, action) => {
            // Add user to the state array
            state.user = action.payload.data.user;
            state.token = action.payload.data.token;
            state.loading = false;
            state.errors = initialState.errors;
        }),
        builder.addCase(register.rejected, (state, action) => {
            // Add user to the state array
            state.errors = action.payload.data.errors;
            state.loading = false;
        }),
        builder.addCase(register.pending, (state) => {
            // Add user to the state array
            state.loading = true
        }),
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.data.user;
            state.token = action.payload.data.token;
            state.loading = false;
            state.errors = initialState.errors;
        }),
        builder.addCase(login.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(login.rejected, (state, action) => {
            // Add user to the state array
            state.errors = action.payload.data.errors;
            state.loading = false;
        })
    )
})

export const userReducer = userSlice.reducer
