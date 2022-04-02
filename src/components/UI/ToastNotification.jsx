import React from 'react';

const ToastNotification = (props) => {
    return (
            <div onClick={() => props.onClose()} className = 'toast'>
                {props.message}
            </div>
    );
};

export default ToastNotification;