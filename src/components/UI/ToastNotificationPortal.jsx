import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {useToastPortal} from "../hooks/useToastPortal";
import ReactDOM from "react-dom";
import {uuid} from "../API/UUID";
import ToastNotification from "./ToastNotification";

const ToastNotificationPortal = forwardRef((autoCloseTime,ref) => {
    const [toasts,setToasts] = useState([]);
    const {loaded,portalId} = useToastPortal();


    function removeToast(id) {
        setToasts(toasts.filter(toast => toast.id !== id))
    }

    useImperativeHandle(ref,() => ({
        addMessage(toast) {
            setToasts([...toasts,{...toast,id:uuid()}])
        }
    }))

    return  loaded ? ReactDOM.createPortal(
        <div className='toast__container'>
            {toasts.map((toast) => {
                return <ToastNotification
                    key = {toast.id}
                    message = {toast.message}
                    onClose = {() => removeToast(toast.id)}/>
            })}
        </div>,

        document.getElementById(portalId)
    ) : (<></>)
})

export default ToastNotificationPortal;