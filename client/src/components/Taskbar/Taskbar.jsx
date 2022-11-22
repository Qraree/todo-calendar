import React, {useContext, useState} from 'react';
import './Taskbar.css'
import {ModalContext} from "../../Context";
import Button from "../Button/Button";
import Task from "./Task/Task";

const Taskbar = () => {
    const [showModal, setShowModal] = useContext(ModalContext)
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            body: 'Hfbwe'
        },
         {
            id: 2,
            body: 'Hfbwqdqe'
        },
         {
            id: 3,
            body: 'Hfbwefweg'
        },
         {
            id: 4,
            body: 'Hfbwefwe'
        },

    ])

    function showModalHandler() {
        setShowModal(false)
        console.log(`${showModal}`)
    }


    function inputHandler(e) {
        setTask(e.target.value)
    }

    function addTaskHandler() {
        const newTask = {
            id: Math.random() * Math.random(),
            body: task
        }
        setTaskList([...taskList, newTask])
        setTask('')
    }

    function deleteTask(task) {
        setTaskList(taskList.filter(t => t.id !== task.id))
    }

    return (
        <div className={'taskbar'} style={{left: showModal ? '0' : '-400px'}}>
            <Button onClick={showModalHandler} className={'close'}>x</Button>
            <textarea rows={5} cols={40} value={task} onChange={(e) => inputHandler(e)} className={"input"}/>
            <Button className={'addTask'} onClick={addTaskHandler}>Add task</Button>
            <div className={'task-list'}>
                {taskList.map(task => <Task task={task} deleteTask={deleteTask}/>)}
            </div>
        </div>
    );
};

export default Taskbar;