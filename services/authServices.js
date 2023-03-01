import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = 'https://proto-3pks.onrender.com'
export const LoginService = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, formData)    
        console.log(response.data);
        if (response.status === 200 || response.status === 201) {

            // storing token
           await AsyncStorage.setItem('token', response.data);
            return response.data
        }

    } catch (error) {
        console.log('error', error)

    }

}

export const SignUpService = async (formData) => {
    try {
        
        const response = await axios.post(`${BASE_URL}/signup`, formData)
        
        console.log(response);
        if (response.status === 201) {
            return response.data
        }
    }
    catch (error) {
        console.log("error", error)
    }

}

