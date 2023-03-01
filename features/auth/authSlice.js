import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginService, SignUpService } from '../../services/authServices';


const getToken = async () => {
    try {
       return await AsyncStorage.getItem('token')
    }
    catch(e){
        //
    }
}
const initialState = {
    token : getToken() || null
}

export const signUp = createAsyncThunk('auth/signUp', async (formData, thunkAPI) => {
    try {
        console.log(formData)
        return await SignUpService(formData)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        console.log(formData)
        return await LoginService(formData)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null             
        }
    },
    extraReducers: {
        [signUp.fulfilled]: (state, action) => {
            state.token = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.token = action.payload;
        },
    }
})
export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer
