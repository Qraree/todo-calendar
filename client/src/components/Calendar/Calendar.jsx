import React, {useState} from 'react';
import './Calendar.css'
import CalendarDays from "./CalendarDays/CalendarDays";

const Calendar = () => {
    const [currentDay, setCurrentDay] = useState(new Date())
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const changeCurrentDay = (day) => {
        setCurrentDay(new Date(day.year, day.month, day.number))
    }

    return (
        <div>
            {/*<h1>Calendar</h1>*/}
            <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
            <div className={"calendar"}>
                <div className={"calendarHeader"}>
                    {weekdays.map(weekday => <p>{weekday}</p>)}
                </div>
                <div className={"calendarBody"}>
                    <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
                </div>

            </div>
        </div>
    );
};

export default Calendar;