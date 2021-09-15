import React from 'react';
import ReactDOM from 'react-dom';
import Jsonform from './jsonform';

let forms = document.getElementsByClassName('jsonform');

for (let i in forms) {
    let form = forms[i];
    if (form instanceof HTMLElement) {
        ReactDOM.render(<Jsonform form={form}/>, form);
    }
}
