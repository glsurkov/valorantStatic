import React from 'react';

const ModalWindow = ({visible, setVisible, window_style, content_style,children}) => {

    const classes = ["modal-window", ...window_style]
    const classes2 = ["modal-window__content", ...content_style]

    if(visible){
        classes.push("modal-window__active")
        document.documentElement.style.overflowY = 'hidden'
    }


    return (
        <div onClick={() => {
            setVisible(false)
            console.log('click')
            document.documentElement.style.overflowY = ''
        }} className={classes.join(' ')}>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className={classes2.join(' ')}>
                {children}
            </div>
        </div>
    )

};

export default ModalWindow;