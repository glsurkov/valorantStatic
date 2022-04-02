import React, {useRef, useState} from 'react';
import NavBar from "./NavBar";
import company_logo from '../../images/company-logo.svg';
import product_logo from '../../images/product-logo.svg';
import {useAuth0} from "@auth0/auth0-react";
import Button from "../UI/Button";
import ModalWindow from "../UI/ModalWindow";
import unknown_user from '../../images/user.png'
import BurgerMenu from "../UI/BurgerMenu";
import ToastNotificationPortal from "../UI/ToastNotificationPortal";

const Header = () => {

    const [visible,setVisible] = useState(false)
    const [burger,setBurger] = useState(false)
    const {loginWithRedirect,isAuthenticated,logout,user} = useAuth0();
    const toastRef = useRef();

    function changeBurger() {
        const state = burger ? false : true;
        setBurger(state)
        console.log('клик')
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
                <div className = 'header__logo'>
                    <img className = "company-logo header__company-logo" src = {company_logo} alt='company-logo'/>
                    <img className = "product-logo header__product-logo" src = {product_logo} alt='product-logo'/>
                </div>
                <NavBar addToast = {addToast}/>
                <BurgerMenu addToast = {addToast} onClick = {changeBurger} burger = {burger} />
                <div  onClick = {() => activeModal(true)} className = "header__user">
                    <img className = " avatar header__avatar" src = {isAuthenticated ? user.picture : unknown_user} alt = "pic"/>
                    <span  className='link link--optional'>{isAuthenticated ? user.name : 'USER'}</span>
                    <div className='popover'>
                    <ModalWindow window_style = {['header__pop-up']}
                                content_style ={['header__pop-content']}
                                visible = {visible}
                                setVisible = {setVisible}>
                        {isAuthenticated
                            ? <Button title='Log Out' classes={['header__button']} onClick={logout}/>
                            : <Button title='Log In' classes={['header__button']} onClick={loginWithRedirect}/>
                        }
                    </ModalWindow>
                        </div>
                </div>
            </div>
            <ToastNotificationPortal ref = {toastRef} />
        </header>
    )
}

export default Header;