import mushroomData from '../../helpers/data/mushroomData';

// import utils from '../../helpers/utils';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((response) => console.warn('Get Mushrooms worked!!', response.data))
    .catch((err) => console.error('get mushrooms borke :/', err));
  // const domString = '<h1>I SEE MUSHROOMS!!!</h1>';
  // utils.printToDom('#forest', domString);
};

export default { buildForest };
