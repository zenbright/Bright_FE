import axios from 'axios';

const login = async (account, password, fname, email, dateOfBirth) => {
    try {
        const response = await axios.post('http://13.54.70.178:4000/bright-backend/api/auth/bright/signup', 
        { account, password, fname, email, dateOfBirth});
        return response.data; 
    }   
    catch (error) {
        throw error.response.data;
    };
}

export default login;