import React, {useState} from 'react';
import './User.css'

const User = (props) => {
    
    function clickHandler() {
        props.setCurrentUser(props.id)
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