import React, { useState } from 'react';

function InputHandler(props) {
    const { focused, setFocused } = useState(false)

    const handleFocus = (e) => {
        setFocused(true)
    }
    const Heading = props.data.Heading
    const Fields = props.data.Fields.map( (field) => (
        <div className="formInput">
            <label>{field.label}</label>
            <input key={field.id} {...field} 
            onChange={props.onChange}
            ></input>
        </div>));

    return (
        <div>
        <h1>{Heading}</h1>
        <div>{Fields}</div>
        </div>
    )
}

export default InputHandler
