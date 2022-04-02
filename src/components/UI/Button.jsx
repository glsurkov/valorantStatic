import React from 'react';

const Button = (props) => {

    return (
        <button className = {`button ${props.classes.join(' ')}`} onClick = {() => props.onClick()}>
            {props.title}
        </button>
    );
};

export default Button;