import React from 'react';
import "./input.css"

const Input = (props) => {
    const {
        placeholder = "",
        type = "text",
        onChange,
        value,
        name,
    } = props

    return (
        <div>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={event => onChange(event)}
                name={name}
            />
        </div>
    );
};

export default Input;
