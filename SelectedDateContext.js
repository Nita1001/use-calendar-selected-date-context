import React, { createContext, useState } from 'react';

// Create a new context for the selected date.
const SelectedDateContext = createContext();

// Define a component that provides the SelectedDateContext to its children.
const SelectedDateProvider = ({ children }) => {
  // Define state variables for the selected date, whether to display times, and the selected time.
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayTimes, setDisplayTimes] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);

  // Define a function to hide the times.
  const hideDates = () => {
    setDisplayTimes(false);
    setSelectedTime(null);
  };

  // Define a function to show the times.
  const showDates = () => {
    setDisplayTimes(true);
    setSelectedTime(null);
  };

  // Return a Provider component for the SelectedDateContext, passing in the state variables and functions as values.
  return (
    <SelectedDateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        displayTimes,
        hideDates,
        showDates,
        selectedTime,
        setSelectedTime
      }}>
      {children}
    </SelectedDateContext.Provider>
  );
};

// Export a custom hook for accessing the SelectedDateContext.
export const useSelectedDateGlobalContext = () => {
  return useContext(SelectedDateContext);
};

// Export the SelectedDateProvider as the default export of this module.
export { SelectedDateProvider };
