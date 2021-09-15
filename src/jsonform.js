
import './jsonform.css';

import Form from "@rjsf/core";

const log = (type) => console.log.bind(console, type);

function uniqid(prefix = "", random = false) {
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
    return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}`:""}`;
};

function JsonForm(props) {
    let id = uniqid('jsonform-');
    let schema = props.form.getAttribute('json-schema');

    try {
        schema = JSON.parse(schema);
    } catch (error) {
        console.log('[JsonForm] ERROR! The following string is not a valid JSON object:', schema);
        schema = {}
    }

    return (
        <div className="App">
            <Form id={id} schema={schema} onChange={log("changed")} onSubmit={log("submitted")} onError={log("errors")} />
        </div>
    );
}

export default JsonForm;
