import _ from 'lodash';
import myName from './myName';
import './style.css';


function component() {
    const element = document.createElement('div');
    element.textContent = myName('Fox');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());