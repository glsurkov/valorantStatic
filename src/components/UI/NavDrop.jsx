import React from 'react';
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const NavDrop = (props) => {

    const {isAuthenticated,loginWithRedirect,logout} = useAuth0()

    let active = '';

    if (props.visible) {
        active = 'nav-drop--active'
    }

    return (
        <ul className = {`nav-drop ${active}`}>
            <Link onClick = {() => props.onClick()} to ="/" className = "nav-drop__item">GAME</Link>
            <Link onClick = {() => {if(!isAuthenticated){props.addToast()}props.onClick()}} to = "/champions"className = "nav-drop__item">CHAMPIONS</Link>
            <Link onClick = {() => props.onClick()} to = "news" className = "nav-drop__item">NEWS</Link>
            {!isAuthenticated
                ? <li  className = "nav-drop__item nav-drop__item--login" onClick={() => loginWithRedirect()}>LOG IN</li>
                : <li  className = "nav-drop__item nav-drop__item--logout" onClick={() => logout()}>LOG OUT</li>}
        </ul>
    );
};

export default NavDrop;