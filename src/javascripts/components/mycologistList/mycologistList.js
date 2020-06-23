import mycologistComponent from '../mycologist/mycologist';
import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';

const buildHut = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      console.warn('Get mycologist worked!!', mycologists);
      let domString = `
        <h2 class="text-center">Hut</h2>
        <div class="d-flex flex-wrap">
      `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });

      domString += '</div>';

      utils.printToDom('#hut', domString);
    })
    .catch((err) => console.error('get mycologist broke :/', err));
};

export default { buildHut };
