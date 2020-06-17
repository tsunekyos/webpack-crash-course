import _ from 'lodash';
import Tiger from './utilities';

console.log(Tiger.say());

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'Webpack', '!!'];
  element.innerHTML = _.join(array, '_');

  return element;
}

document.body.appendChild(component());