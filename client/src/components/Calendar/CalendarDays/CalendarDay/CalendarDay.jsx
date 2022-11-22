import React, {useEffect, useState} from 'react';
import './CalendarDay.css'

const CalendarDay = ({day, changeCurrentDay}) => {

    const [holiday, setHoliday] = useState('0')

    return (
        <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
             onClick={() => changeCurrentDay(day)}>
            <p>{day.number}</p>
            <div className={'tasks'}>
                {/*<div className={'calendar-task'}></div>*/}
                {/*<div className={'calendar-task'}></div>*/}
                {/*<div className={'calendar-task'}></div>*/}
                {/*<div className={'calendar-task'}></div>*/}
            </div>
        </div>
    );
};

export default CalendarDay;

