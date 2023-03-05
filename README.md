# React Calendar and Selected Date Context

This repository contains the custom React hook `useCalendar` and `SelectedDateGlobalContext` context.

## useCalendar

This hook encapsulates the logic for generating a calendar and handling events such as clicking on a day or changing the month or year.

The hook returns an object with properties for the various functions and state variables used by the hook:

-   `generateCalendar`: a function that generates an array of React components representing the days of the month.
-   `prevYear`: a function that decrements the year state variable and hides the selected date.
-   `nextYear`: a function that increments the year state variable and hides the selected date.
-   `handleMonthClick`: a function that handles a click on a month in the month list.
-   `showMonthList`: a boolean state variable that indicates whether the month list should be displayed.
-   `monthList`: a function that displays the month list.
-   `year`: a state variable that holds the current year.
-   `month`: a state variable that holds the current month.

## Usage

To use the `useCalendar` hook, import it into a component and call it like any other hook:

```jsx
import useCalendar from "./useCalendar";

function MyComponent() {
    const {
        generateCalendar,
        prevYear,
        nextYear,
        handleMonthClick,
        showMonthList,
        monthList,
        year,
        month,
    } = useCalendar();

    // ...
}
```

## Dependencies

The `useCalendar` hook depends on the following packages:

-   `react`: for creating and rendering React components.
-   `react-dom`: for interacting with the DOM.

# SelectedDateContext and useSelectedDateGlobalContext

This module defines a React context and a custom hook for managing the selected date and time in an application.

## SelectedDateContext

The `SelectedDateContext` is a React context that provides access to the selected date and time in an application. It is created using the `createContext` function from the `react` module.

The context provides the following state variables and functions:

-   `selectedDate`: the currently selected date.
-   `setSelectedDate`: a function to set the currently selected date.
-   `displayTimes`: a boolean indicating whether to display the time component.
-   `hideDates`: a function to hide the time component.
-   `showDates`: a function to show the time component.
-   `selectedTime`: the currently selected time.
-   `setSelectedTime`: a function to set the currently selected time.

The context is wrapped in a `SelectedDateProvider` component that provides the state variables and functions to its children as props.

## useSelectedDateGlobalContext

The `useSelectedDateGlobalContext` custom hook provides access to the `SelectedDateContext` from any component in the application. It is used to get the selected date and time from the context and to update the selected date and time when necessary.

To use the hook, call it from any component in the application. It returns an object with the same state variables and functions as the `SelectedDateContext`. Use these variables and functions to access and update the selected date and time.

## Dependencies

The code for the React context and for the custom hook depends on the following packages:

-   `react`: for creating and rendering React components.
-   `react-dom`: for interacting with the DOM.

The code for managing the selected date depends on React's `createContext` and `useState` hooks.

## License

This code is released under the [MIT License](https://opensource.org/license/mit/).
