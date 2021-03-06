import _ from 'lodash';
import printMe from './print';
import './style.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);
 
  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}