import React, {useRef, useState} from 'react';
import NavBar from "./NavBar";
import company_logo from '../../images/company-logo.svg';
import product_logo from '../../images/product-logo.svg';
import {useAuth0} from "@auth0/auth0-react";
import Button from "./Button";
import ModalWindow from "./ModalWindow";
import unknown_user from '../../images/user.png'
import BurgerMenu from "./BurgerMenu";
import ToastNotificationPortal from "./ToastNotificationPortal";
import Logo from "./Logo";
import UserHeader from "./UserHeader";

const Header = () => {

    const [visible,setVisible] = useState(false)
    const [burger,setBurger] = useState(false)
    const {loginWithRedirect,isAuthenticated,logout,user} = useAuth0();
    const toastRef = useRef();

    function changeBurger() {
        const state = burger ? false : true;
        setBurger(state)
    }

    function activeModal(state){
        setVisible(state)
    }

    function addToast() {
        toastRef.current.addMessage({message:'Необходимо авторизироваться'})
    }


    return (
        <header className = "header">
            <div className = "header__container">
                <Logo/>
                <NavBar addToast = {addToast}/>
                <BurgerMenu addToast = {addToast} onClick = {changeBurger} burger = {burger} />
                <UserHeader activeModal = {activeModal}
                            isAuthenticated = {isAuthenticated}
                            visible={visible}
                            setVisible={setVisible}
                            logout={logout}
                            loginWithRedirect={loginWithRedirect}
                            user = {user}
                />
            </div>
            <ToastNotificationPortal ref = {toastRef} />
        </header>
    )
}

export default Header;