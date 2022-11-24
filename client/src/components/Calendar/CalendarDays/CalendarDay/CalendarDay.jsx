import React, {useContext, useEffect, useState} from 'react';
import './CalendarDay.css'
import {ModalContext} from "../../../../Context";

const CalendarDay = ({day, changeCurrentDay}) => {

    const [showModal, setShowModal] = useContext(ModalContext)
    const [taskDayList, setTaskDayList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/tasks/day?date=${day.year}${day.month}${day.number}&userId=${showModal.userId}`)
            .then(response => response.json())
            .then(data => setTaskDayList(data))
    }, [showModal.userId])

    return (
        <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
             onClick={() => changeCurrentDay(day)}>
            <p>{day.number}</p>
            <div className={'tasks'}>
                {taskDayList.map(task => (
                    <div className={'calendar-task'} key={task.id} style={{backgroundColor: task.done === 1 ? '#67c981':'#bd6262'}}></div>
                ))}
            </div>
        </div>
    );
};

export default CalendarDay;

