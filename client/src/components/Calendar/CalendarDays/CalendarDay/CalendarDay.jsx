import React from 'react';
import './CalendarDay.css'

const CalendarDay = ({day, changeCurrentDay}) => {

    return (
        <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
             onClick={() => changeCurrentDay(day)}>
            <p>{day.number}</p>
        </div>
    );
};

export default CalendarDay;

// https://isdayoff.ru/YYYYMMDD