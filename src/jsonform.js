
import './jsonform.css';

import Form from "@rjsf/core";

const submit = function(form) {
    return (data) => {
        const event = new CustomEvent('jsonform-submit', { detail: data });
        form.dispatchEvent(event);
    };
};

const change = (data) => {
    console.log("CHANGE", data);
};

const focus = function(form) {
    return (id, value) => {
        const event = new CustomEvent('jsonform-focus', { detail: {id: id, value: value} });
        form.dispatchEvent(event);
    };
};

const error = (data) => {
    console.log("ERROR", data);
};

function uniqid(prefix = "", random = false) {
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
    return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}`:""}`;
};

const CustomSelectWidget = (props) => {
    console.log("PROPS:", props);
    return (
        <select
           id={props.id}
           className="form-control"
           onChange={(event) => props.onChange(event.target.value)}
           onFocus={(event) => props.onFocus(props.id, props.value)}
        >
        </select>
    );
};

const widgets = {
    'custom-select': CustomSelectWidget
};

function JsonForm(props) {
    let id = uniqid('jsonform-');
    let config = {
        schema: props.form.getAttribute('json-schema'),
        uiSchema: props.form.getAttribute('json-ui-schema'),
        jsonData: props.form.getAttribute('json-data')
    }

    for (let key in config) {
        try {
            config[key] = JSON.parse(config[key]) || {};
        } catch (error) {
            console.log('[JsonForm] ERROR! The following string is not a valid JSON object:', config[key]);
            config[key] = {}
        }
    }

    return (
        <div className="jsonform-wrapper">
            <Form
                id={id}
                schema={config['schema']}
                uiSchema={config['uiSchema']}
                formData={config['jsonData']}
                onChange={change}
                onSubmit={submit(props.form)}
                onFocus={focus(props.form)}
                onError={error}
                widgets={widgets}
            />
        </div>
    );
}

export default JsonForm;
