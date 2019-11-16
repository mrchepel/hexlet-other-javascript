import { camelCase } from 'lodash';

export default (docement) => {
  for (const element of docement.body.getElementsByTagName('*')) { // eslint-disable-line
    const process = (item) => element.classList.replace(item, camelCase(item));
    element.classList.forEach(process);
  }
};
