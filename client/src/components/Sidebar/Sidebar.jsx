import React, {useEffect, useState} from 'react';
import './Sidebar.css'
import User from "./User/User";
import Button from "../Button/Button";

const Sidebar = () => {

    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState('')
    const [inputUser, setInputUser] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setUsers(data.data))
    }, [])


    function setUser(e) {
        setInputUser(e.target.value)
    }

    function addUserHandler() {
        const newUser = {
            "id": Number(Math.random().toString(16).slice(2)),
            "name": inputUser,
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => console.log(data.message))
        setTimeout(() => {
            setInputUser('')
        }, 1000)
        setInputUser('User was created!')
    }

    return (
        <div className={"sidebar"}>
            <div className={'userList'}>
                <div className={"user-container"}>
                        {`Users`}
                </div>
                {users.map(user => <User
                    name={user.name}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    key={user.id}
                    id={user.id}/>)}
                <div className={'input-div'}>
                    <input type={'text'} className={'addUserInput'} value={inputUser} onChange={(e) =>setUser(e)}/>
                    <Button className={'addTask'} onClick={addUserHandler}>Add user</Button>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;