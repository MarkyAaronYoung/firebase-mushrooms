import mycologistData from '../../helpers/data/mycologistData';
import mycologistMushroomData from '../../helpers/data/mycologistMushroomData';
import utils from '../../helpers/utils';

import './singleMycologist.scss';

const buildMycologist = (e) => {
  const mycologistId = e.target.closest('.card').id;
  mycologistData.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;

      // todo: take out when done with testing
      mycologistMushroomData.getMycoShroomsByMycoUid(mycologist.uid)
      .then((res) => console.warn('getMycoshrooms worked!', res))
      .catch((err) => console.error('problem in getMychoShrooms', err));

      const domString = `
        <h2 class="text-center">Featured Mycologist</h2>
        <div class="col-12">
          <div class="card text-white bg-dark border-0 rounded-0">
            <div class="card-header">Mycologist ${mycologist.name} (Age: ${mycologist.age})</div>
            <div class="card-body"></div>
          </div>
        </div>
      `;

      utils.printToDom('#single-myco', domString);
    })
    .catch((err) => console.error('problem with single mycologist', err));
};

export default { buildMycologist };