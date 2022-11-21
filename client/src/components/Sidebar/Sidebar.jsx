import React, {useEffect, useState} from 'react';
import './Sidebar.css'
import User from "./User/User";

const Sidebar = () => {

    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <div className={"sidebar"}>
            <User name={"Users"}/>
            {users.map(user => <User
                name={user.name}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                key={user.id}
                id={user.id}/>)}
        </div>

    );
};

export default Sidebar;