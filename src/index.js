import _ from 'lodash';
import './style.css';
import './style.scss';
import logo from './logo.png';

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'Webpack', '!!'];
  element.innerHTML = _.join(array, '_');

  return element;
}

const image = new Image();
image.src = logo;

document.body.appendChild(component());
document.body.classList.add('haikei');

document.body.appendChild(image);
