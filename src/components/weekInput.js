import React, { useState, useEffect } from 'react';

function getWeeksInMonth(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const numDays = lastDayOfMonth.getDate();
    const weeks = [];
    let currentWeek = [];

    for (let day = 1; day <= numDays; day++) {
        const date = new Date(year, month, day);
        const formated = date.toISOString().split('T')[0]
        currentWeek.push(formated);
        if (date.getDay() === 6 || day === numDays) {
            weeks.push([...currentWeek]);
            currentWeek = [];
        }
    }

    return weeks;
}

function WeekSelector({setDates}) {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const [weeks, setWeeks] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState([]);

    useEffect(() => {
        const weeksInMonth = getWeeksInMonth(year, month);
        setWeeks(weeksInMonth);
        setSelectedWeek(weeksInMonth[0] || []);
    }, [year, month]);
    
    const affiche = () =>{
        console.log("weeks",weeks)
        console.log("selected", selectedWeek)
        console.log("idx dans week: ",weeks.indexOf(selectedWeek))
    }

    const handleWeekChange = (e)=>{
        // console.log("index",e.target.value)
        setSelectedWeek(weeks[parseInt(e.target.value, 10)])
    }

    useEffect(() => {
        console.log("ici hein")
        setDates(selectedWeek);
    }, [selectedWeek]);

    return (
        <div>
            <label>
                Année:
                <select value={year} onChange={(e) => setYear(parseInt(e.target.value, 10))}>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i).map(y => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </select>
            </label>
            <label>
                Mois:
                <select value={month} onChange={(e) => setMonth(parseInt(e.target.value, 10))}>
                    {Array.from({ length: 12 }, (_, i) => i).map(m => (
                        <option key={m} value={m}>{new Date(0, m).toLocaleString('default', { month: 'long' })}</option>
                    ))}
                </select>
            </label>
            <label>
                Semaine:
                <select
                    value={weeks.indexOf(selectedWeek)}
                    onChange={(e) => handleWeekChange(e)}
                >
                    {weeks.map((week, index) => (
                        <option key={index} value={index}>
                            Semaine {index + 1}
                            {/* {week[0]} - {week[week.length - 1]} */}
                        </option>
                    ))}
                </select>
            </label>
            {/* <div>
                <h3>Semaine sélectionnée:</h3>
                <ul>
                    {selectedWeek.map(date => (
                        <li key={date}>{date}</li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
}

export default WeekSelector;