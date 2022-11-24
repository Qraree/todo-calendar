import React, {useContext, useEffect, useState} from 'react';
import './Calendar.css'
import CalendarDays from "./CalendarDays/CalendarDays";
import {ModalContext} from "../../Context";

const Calendar = () => {
    const [currentDay, setCurrentDay] = useState(new Date())
    const [showModal, setShowModal] = useContext(ModalContext)
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const changeCurrentDay = (day) => {
        setCurrentDay(new Date(day.year, day.month, day.number))
        setShowModal({
            ...showModal,
            show: true,
            date: `${day.year}${day.month}${day.number}`
        })

    }


    return (
        <div>
            <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
            <div className={"calendar"}>
                <div className={"calendarHeader"}>
                    {weekdays.map(weekday => <p key={weekday}>{weekday}</p>)}
                </div>
                <div className={"calendarBody"}>
                    <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
                </div>

            </div>
        </div>
    );
};

export default Calendar;