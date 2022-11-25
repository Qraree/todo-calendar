import React, {useEffect, useState} from 'react';
import './Task.css'
import Button from "../../Button/Button";

const Task = (props) => {
    const [checked, setChecked] = useState(false)

    const checkHandler = () => {
        if (props.task.done === 1) {
            fetch(`http://localhost:5000/tasks?done=0&id=${props.task.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
            })
                .then(response => response.json())
                .then(data => console.log(data.message))
            setChecked(false)
        } else {
            fetch(`http://localhost:5000/tasks?done=1&id=${props.task.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
            })
                .then(response => response.json())
                .then(data => console.log(data.message))
            setChecked(true)
        }
    }

    useEffect(() => {
        if (props.task.done === 1) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }, [])
    function deleteHandler() {
        fetch(`http://localhost:5000/tasks?id=${props.task.id}`, {
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
        <div className={'task'}>
            <input type={'checkbox'} checked={checked} className={'box'} onChange={checkHandler}/>
            <div className={'task-content'} style={{textDecoration: checked ? 'line-through': 'none'}}>{props.task.content}</div>
            <Button className={'closeTask'} onClick={deleteHandler}>x</Button>
        </div>
    );
};

export default Task;

