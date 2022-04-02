import React from 'react';

const ModalWindow = (props) => {

    const classes = ['modal-window'];

    if(props.visible){
        classes.push('modal-window--active');
        document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    }

    if(props.visible) {
        return (<>
                <div className={classes.join(' ') + ' ' + props.window_style.join(' ')}
                     onClick={(e) => {
                         console.log('клик')
                         props.setVisible(false)
                         document.getElementsByTagName('html')[0].style.overflowY = '';
                         e.stopPropagation();
                     }}/>
                <div className={`modal-window__content ${props.content_style.join(' ')}`}
                     onClick={(e) => e.stopPropagation()}>
                    {props.children}
                </div>
            </>
        )
    } else{
        return null
    }
};

export default ModalWindow;