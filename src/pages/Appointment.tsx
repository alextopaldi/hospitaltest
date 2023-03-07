import { Link } from "react-router-dom";
import { Record } from "../components/Record";
import { records } from "../data/records";
import { IDay } from "../models/Day";

export function Appointment() {

    const backArrow = require('../media/back.png')
    const chevronLeft = require('../media/chleft.png')
    const chevronRight = require('../media/chright.png')
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    function calendarDays() {
        let i = 1
        let days : IDay[] = []
        while(i <= 30) {
            if(i < 5) {
                days.push({
                    className : 'day passive',
                    value : i
                })
                i++
            }
            else if(i == 15) {
                days.push({
                    className : 'day active',
                    value: i,
                    data : '2'
                })
                i++
            }
            else if(i == 30) {
                days.push({
                    className : 'day active',
                    value: i,
                    data : '1'
                })
                i++
            }
            else {
                days.push({
                    className : 'day',
                    value: i
                })
                i++
            }
        }
        return days
    }
    return(
        <>
            <div className='container'>
                <Link to='/' className="appointment-link">
                    <img src={backArrow} alt="" />
                    <p>Мои записи</p>
                </Link>
                <div className="appointment-content">
                    <div className="records-list">
                        {records.map(record => <Record record={record} key={record.id}/>)}
                    </div>
                    <div className="calendar">
                        <div className="calendar-month">
                            <img src={chevronLeft} alt="" />
                            <p>Июнь, 2020</p>
                            <img src={chevronRight} alt="" />
                        </div>
                        <div className="calendar-items">
                            <div className="calendar-items__week-days">
                                <div className="week-day">Пн</div>
                                <div className="week-day">Вт</div>
                                <div className="week-day">Ср</div>
                                <div className="week-day">Чт</div>
                                <div className="week-day">Пт</div>
                                <div className="week-day">Сб</div>
                                <div className="week-day">Вс</div>
                            </div>
                            <div className="calendar-items__days">
                                {calendarDays().map(day => <div key={day.value} data-number={day.data} className={day.className}>{day.value}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}