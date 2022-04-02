import React from 'react';
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
const NavBar = (props) => {

    const {isAuthenticated} = useAuth0();

    return (
        <nav className= 'nav-menu'>
            <ul className = 'header__link-list'>
                <Link to = '/'>
                    <li className = 'link header__link'>GAME</li>
                </Link>
                <Link onClick = {() => {
                    if (!isAuthenticated) {
                        props.addToast()
                    }
                }} to = '/champions'>
                    <li className = 'link header__link'>CHAMPIONS</li>
                </Link>
                <Link to = '/news'>
                    <li className = 'link header__link link--optional'>NEWS</li>
                </Link>{/*
                <li className = 'link header__link'>PATCH NOTES</li>
                <li className = 'link header__link link--optional'>DISCOVER</li>
                <li className = 'link header__link'>ESPORTS</li>
                <li className = 'link header__link'>UNIVERSE</li>
                <li className = 'link header__link'>SHOP</li>
                <li className = 'link header__link'>SUPPORT</li>*/}
            </ul>
        </nav>
    );
};

export default NavBar;