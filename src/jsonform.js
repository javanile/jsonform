
import './jsonform.css';

import Form from "@rjsf/core";

const log = (type) => console.log.bind(console, type);

function JsonForm(props) {
    let schema = props.form.getAttribute('json-schema');

    try {
        schema = JSON.parse(schema);
    } catch (error) {
        console.log('[JsonForm] ERROR! The following string is not a valid JSON object:', schema);
        schema = {}
    }

    return (
        <div className="App">
            <Form schema={schema} onChange={log("changed")} onSubmit={log("submitted")} onError={log("errors")} />
        </div>
    );
}

export default JsonForm;
