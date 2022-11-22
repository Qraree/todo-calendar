import React, {useState} from 'react';
import './Task.css'
import Button from "../../Button/Button";

const Task = (props) => {
    const [checked, setChecked] = useState(false)

    const checkHandler = () => {
        setChecked(!checked)
    }

    function deleteHandler() {
        props.deleteTask(props.task)
    }

    return (
        <div className={'task'}>
            <input type={'checkbox'} className={'box'} onChange={checkHandler}/>
            <div className={'task-content'} style={{textDecoration: checked ? 'line-through': 'none'}}>{props.task.body}</div>
            <Button className={'closeTask'} onClick={deleteHandler}>x</Button>
        </div>
    );
};

export default Task;

//todo checkox state