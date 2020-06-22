import axios from 'axios';
import apiKeys from '../apiKeys.json';
import mushroomList from '../../components/mushroomList/mushroomList';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

// axios.get(`${baseUrl}/mushrooms.json`);

const getMushrooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mushrooms.json`)
    .then((response) => {
      const mushroomObjects = response.data;
      const mushrooms = [];
      Object.keys(mushroomObjects).forEach((mushroomId) => {
        mushroomObjects[mushroomId].id = mushroomId;
        mushrooms.push(mushroomObjects[mushroomId]);
      });
      resolve(mushrooms);
    })
    .catch((err) => reject(err));
});

export default { getMushrooms };
