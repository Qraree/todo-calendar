import React, {useContext, useState} from 'react';
import './User.css'
import {ModalContext} from "../../../Context";

const User = (props) => {

    const [showModal, setShowModal] = useContext(ModalContext)

    function clickHandler() {
        props.setCurrentUser(props.id)
        setShowModal(true)
        console.log(`${showModal}`)
    }

    return (
        <div
            className={"user-container"}
            onClick={() => clickHandler()} style={{
                backgroundColor: props.currentUser === props.id ? 'rgba(0,0,0,.10)' : 'white'
        }}>
            {props.name}
        </div>
    );
};

export default User;