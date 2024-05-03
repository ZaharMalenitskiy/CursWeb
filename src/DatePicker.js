import React, { useState } from "react";

function DatePicker() {
    const [day, setDay] = useState("1");
    const [month, setMonth] = useState("1");
    const [year, setYear] = useState("2000");

    const updateDays = (selectedMonth, selectedYear) => {
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    };

    const handleDayChange = (e) => {
        setDay(e.target.value);
    };

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
        setDay(""); // Сброс дней при изменении месяца
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
        setDay(""); // Сброс дней при изменении года
    };

    const monthsArray = Array.from({ length: 12 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from({ length: 120 }, (_, i) => currentYear - i);

    const daysArray = updateDays(month, year);

    return (
        <div className="input-container">
            <div>Дата рождения</div>
            <div className="date-group">
                <select className="date1" value={day} onChange={handleDayChange}>
                    {daysArray.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select className="date2" value={month} onChange={handleMonthChange}>
                    {monthsArray.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
                <select className="date3" value={year} onChange={handleYearChange}>
                    {yearsArray.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default DatePicker;
