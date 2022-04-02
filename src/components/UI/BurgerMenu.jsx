import React from 'react';
import NavDrop from "./NavDrop";

const BurgerMenu = (props) => {

    let active = '';

    if(props.burger) {
        active = 'burger-menu--active'
    }


    return (
        <>
        <div onClick={() => props.onClick()} className={`burger-menu ${active}`}>
            <span className = "burger-menu__item"></span>
        </div>
            <NavDrop addToast = {props.addToast} onClick = {props.onClick} visible = {props.burger}/>
        </>
    );
};

export default BurgerMenu;