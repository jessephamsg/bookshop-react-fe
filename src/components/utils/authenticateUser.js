//DEPENDENCIES
import axios from 'axios';

//VARIABLES
import Endpoints from '../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export default {
    async authenticateUser () {
        let error = null;
        let result = null;
        try {
            const data = JSON.parse(sessionStorage.getItem('userData'));
            const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
            if (data) {
              const res = await axios.post(`${REACT_APP_SERVER_URL}/googleauth`, data)
                result = res.data.data
            }
            else if (response.data) 
              result = response.data
          } catch (err) {
            error = err 
          }
          return result
    }
} 
    
