import _ from 'lodash';
import './style.css';
import bgImg from './bg.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');
// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const bgImage = new Image();
  bgImage.src = bgImg;

  element.appendChild(bgImage);

  console.log(Data);
  return element;
}

document.body.appendChild(component());