import axios from "axios";

const BASE_URL = 'https://proto-3pks.onrender.com'
export const getAllProductsService = async () => {
    return await axios.get(`${BASE_URL}/products`);
};

