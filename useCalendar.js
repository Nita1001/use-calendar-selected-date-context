// This custom React hook encapsulates the logic for generating a calendar and handling events such as clicking on a day or changing the month or year.
import React, { useState } from "react";
import { useSelectedDateGlobalContext } from '../contexts/SelectedDateContext';

const useCalendar = () => {
    // Initialize the month and year state variables to the current month and year, and the showMonthList state variable to false.
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [showMonthList, setShowMonthList] = useState(false);

    // Get the setSelectedDate, hideDates, and showDates functions from the useSelectedDateGlobalContext hook.
    const { setSelectedDate, hideDates, showDates } = useSelectedDateGlobalContext();

    // Helper function to determine whether a given year is a leap year.
    const isLeapYear = (year) => {
        return (
            (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
            (year % 100 === 0 && year % 400 === 0)
        );
    };

    // Helper function to get the number of days in February for a given year.
    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 : 28;
    };

    // Function to generate an array of React components representing the days of the month.
    const generateCalendar = () => {
        // Array of the number of days in each month.
        const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,];

        // Get the day of the week of the first day of the current month.
        const firstDay = new Date(year, month, 1).getDay();

        // Generate an array of React components representing each day of the month, including empty days at the beginning of the month as needed.
        const days = Array.from({ length: daysOfMonth[month] }, (_, i) => i + 1)
            .map((day) => (
                <div
                    key={day}
                    className={`day ${day === new Date().getDate() &&
                        month === new Date().getMonth() &&
                        year === new Date().getFullYear()
                        ? "today"
                        : ""
                        }`}
                    onClick={() => handleDayClick(day, month, year)}
                >
                    {day}
                </div>
            ));

        for (let i = 0; i < firstDay; i++) {
            days.unshift(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        return days;
    };

    // Function to decrement the year state variable and hide the selected date.
    const prevYear = () => {
        hideDates();
        setYear(year - 1);
    };

    // Function to increment the year state variable and hide the selected date.
    const nextYear = () => {
        hideDates();
        setYear(year + 1);
    };

    // Function to handle a click on a month in the month list.
    const handleMonthClick = (index) => {
        // Set the month state variable to the selected month index and hide the month list.
        setMonth(index);
        setShowMonthList(false);
        // If the first month is selected, decrement the year state variable. If the last month is selected, increment the year state variable.
        if (index === 0) {
            setYear(year - 1);
        } else if (index === 11) {
            setYear(year + 1);
        }
    };

    // Function to display the month list.
    const monthList = () => {
        hideDates();
        setShowMonthList(true);
    };

    // Function to handle a click on a day.
    const handleDayClick = (day, month, year) => {
        // Construct a string representing the selected date in the format "day-month-year".
        const newSelectedDate = `${day}-${(month + 1).toString().padStart(2, '0')}-${(year % 100).toString().padStart(2, '0')}`;
        // Call the setSelectedDate function from the SelectedDateContext context to update the selected date.
        setSelectedDate(newSelectedDate);
        // Call the showDates function from the same context to display the selected date.
        showDates();
    };

    // Return an object with properties for the various functions and state variables used by the hook.
    return {
        generateCalendar,
        prevYear,
        nextYear,
        handleMonthClick,
        showMonthList,
        monthList,
        year,
        month
    };
};

// Export the useCalendar hook as the default export of this module.
export default useCalendar;        