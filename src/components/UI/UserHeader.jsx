import React from 'react';
import unknown_user from "../../images/user.png";
import ModalWindow from "./ModalWindow";
import Button from "./Button";

const UserHeader = ({activeModal,isAuthenticated,visible, setVisible, logout, loginWithRedirect, user}) => {
    return (
        <div  onClick = {() => activeModal(!visible)} className = "header__user">
            <img className = " avatar header__avatar" src = {isAuthenticated ? user.picture : unknown_user} alt = "pic"/>
            <span  className='link link--optional'>{isAuthenticated ? user.name : 'USER'}</span>
            <div className='popover'>
                <ModalWindow
                             visible = {visible}
                             setVisible = {setVisible}
                             window_style = {['header__pop-up']}
                             content_style ={['header__pop-content']}>
                    {isAuthenticated
                        ? <Button title='Log Out' classes={['header__button']} onClick={logout}/>
                        : <Button title='Log In' classes={['header__button']} onClick={loginWithRedirect}/>
                    }
                </ModalWindow>
            </div>
        </div>
    );
};

export default UserHeader;