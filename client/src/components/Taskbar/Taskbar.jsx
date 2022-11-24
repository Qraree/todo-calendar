import React, {useContext, useEffect, useState} from 'react';
import './Taskbar.css'
import {ModalContext} from "../../Context";
import Button from "../Button/Button";
import Task from "./Task/Task";

const Taskbar = () => {
    const [showModal, setShowModal] = useContext(ModalContext)
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/tasks/day?date=${showModal.date}&userId=${showModal.userId}`)
            .then(response => response.json())
            .then(data => setTaskList(data))
    }, [showModal.date, showModal.userId])

    function showModalHandler() {
        setShowModal({...showModal, show: false})
        console.log(`${showModal.userId}`)
    }


    function inputHandler(e) {
        setTask(e.target.value)
    }

    function addTaskHandler() {
        const newTask = {
            "id": Number(Math.random().toString(16).slice(2)),
            "content": task,
            "done": 0,
            "date": showModal.date,
            "userId": showModal.userId
        }
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(response => response.json())
            .then(data => console.log(data.message))
        setTask('')
    }

    function deleteTask(task) {
        setTaskList(taskList.filter(t => t.id !== task.id))
    }

    function setCheck(id) {

    }

    return (
        <div className={'taskbar'} style={{left: showModal.show ? '0' : '-400px'}}>
            <Button onClick={showModalHandler} className={'close'}>x</Button>
            <textarea rows={5} cols={40} value={task} onChange={(e) => inputHandler(e)} className={"input"}/>
            <Button className={'addTask'} onClick={addTaskHandler}>Add task</Button>
            <div className={'task-list'}>
                {taskList.map(task => <Task task={task} deleteTask={deleteTask} setCheck={setCheck} key={task.id}/>)}
            </div>
        </div>
    );
};

export default Taskbar;