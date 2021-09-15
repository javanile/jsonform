import React from 'react';
import ReactDOM from 'react-dom';
import Jsonform from './jsonform';

let forms = document.getElementsByClassName('jsonform');

const render = () => {
    for (let i in forms) {
        const form = forms[i];
        if (form instanceof HTMLElement && !form.getAttribute('jsonform')) {
            form.setAttribute('jsonform', 'init');
            ReactDOM.render(<Jsonform form={form}/>, form);
            form.setAttribute('jsonform', 'ready');
        }
    }
}

render();

setInterval(render, 500);
