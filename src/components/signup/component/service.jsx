import axios from 'axios';

const login = async (account, password) => {
    try {
        const response = await axios.post('http://13.54.70.178:4000/bright-backend/api/auth/bright/login', 
        { account, password });
        return response.data; 
    }   
    catch (error) {
        throw error.response.data;
    };
}

export default login;