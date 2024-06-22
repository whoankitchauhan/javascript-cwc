// Date and Time Operations

// Creating a new Date object representing the current date and time
let currentDate = new Date();
console.log(currentDate.toString()); // Output: Current date and time as a string
console.log(currentDate.toDateString()); // Output: Current date in human-readable format
console.log(currentDate.toLocaleString()); // Output: Current date and time in local format
console.log(typeof currentDate); // Output: object

// Creating Date objects with specific dates
let specificDate1 = new Date(2023, 0, 23); // Year, Month (0-based), Day
console.log(specificDate1.toLocaleString()); // Output: 1/23/2023, 12:00:00 AM

let specificDate2 = new Date(2023, 0, 23, 5, 3); // Year, Month, Day, Hour, Minute
console.log(specificDate2.toLocaleString()); // Output: 1/23/2023, 5:03:00 AM

let specificDate3 = new Date("2023-01-14"); // Date string in YYYY-MM-DD format
console.log(specificDate3.toLocaleString()); // Output: 1/14/2023, 12:00:00 AM

let specificDate4 = new Date("01-14-2023"); // Date string in MM-DD-YYYY format
console.log(specificDate4.toLocaleString()); // Output: 1/14/2023, 12:00:00 AM

// Getting the current timestamp
let currentTimestamp = Date.now();
console.log(currentTimestamp); // Output: Current timestamp in milliseconds since January 1, 1970

// Getting the timestamp of a specific date
console.log(specificDate4.getTime()); // Output: Timestamp of specificDate4 in milliseconds

// Converting the current timestamp to seconds
console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds

// Getting various parts of the date
let currentDateParts = new Date();
console.log(currentDateParts); // Output: Current date and time

// Getting the month (0-based, so add 1 for the correct month number)
console.log(currentDateParts.getMonth() + 1); // Output: Current month (1-12)

// Getting the day of the week (0 for Sunday, 1 for Monday, etc.)
console.log(currentDateParts.getDay()); // Output: Day of the week (0-6)

// Formatting the date with specific options
let formattedDate = currentDateParts.toLocaleString("default", {
  weekday: "long", // Full name of the day
  year: "numeric", // Numeric representation of the year
  month: "long", // Full name of the month
  day: "numeric", // Numeric representation of the day
});
console.log(formattedDate); // Output: Full date in a human-readable format

// Example: Full date with time
console.log(
  `Today is ${currentDateParts.toLocaleString("default", {
    weekday: "long",
  })} and the time is ${currentDateParts.toLocaleTimeString()}`
);
// Output: Today is [Day] and the time is [Time]

// Additional Date Methods
// Getting the year
console.log(currentDateParts.getFullYear()); // Output: Current year

// Getting the date of the month
console.log(currentDateParts.getDate()); // Output: Current date (1-31)

// Getting the hours
console.log(currentDateParts.getHours()); // Output: Current hour (0-23)

// Getting the minutes
console.log(currentDateParts.getMinutes()); // Output: Current minute (0-59)

// Getting the seconds
console.log(currentDateParts.getSeconds()); // Output: Current second (0-59)

// Summary of Important Date Methods
// - `toString()`: Converts date to string
// - `toDateString()`: Converts date to human-readable string (date only)
// - `toLocaleString()`: Converts date to local format
// - `getTime()`: Gets timestamp of the date
// - `getMonth()`: Gets month (0-11)
// - `getDay()`: Gets day of the week (0-6)
// - `getFullYear()`: Gets the full year
// - `getDate()`: Gets the day of the month (1-31)
// - `getHours()`, `getMinutes()`, `getSeconds()`: Gets hours, minutes, and seconds
// - `toLocaleString('default', { options })`: Formats date with specific options
