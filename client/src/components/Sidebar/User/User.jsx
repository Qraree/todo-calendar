import React, {useContext, useState} from 'react';
import './User.css'
import {ModalContext} from "../../../Context";
import Button from "../../Button/Button";

const User = (props) => {

    const [showModal, setShowModal] = useContext(ModalContext)

    function clickHandler() {
        props.setCurrentUser(props.id)
        setShowModal({...showModal, userId: props.id})
        console.log(`${showModal.userId}`)
    }

    function userDeleteHandler() {
        fetch(`http://localhost:5000/users?id=${props.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        })
            .then(response => response.json())
            .then(data => console.log(data.message))
    }

    return (
        <div
            className={"user-container"}
            onClick={() => clickHandler()} style={{
                backgroundColor: props.currentUser === props.id ? 'rgba(0,0,0,.10)' : 'white'
        }}>
            <div className={'user-name'}>
                {props.name}
            </div>
            <div className={'delete-button'}>
                <Button className={'close'} onClick={userDeleteHandler}>x</Button>
            </div>
        </div>
    );
};

export default User;