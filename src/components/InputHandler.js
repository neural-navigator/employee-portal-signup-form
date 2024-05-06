import React from 'react';

function InputHandler(props) {
    const Heading = props.data.Heading
    const Fields = props.data.Fields.map( (field) => (
        <div>
            <label>{field.label}</label>
            <input key={field.id} {...field}></input>
        </div>));

    return (
        <div>
        <h1>{Heading}</h1>
        <div>{Fields}</div>
        </div>
    )
}

export default InputHandler
