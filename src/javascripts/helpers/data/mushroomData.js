import axios from 'axios';
import apiKeys from '../apiKeys.json';
import mushroomList from '../../components/mushroomList/mushroomList';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMushrooms = () => axios.get(`${baseUrl}/mushrooms.json`);

export default { getMushrooms };
