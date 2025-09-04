function calculateWorkdays(startDate, endDate) {
    // Ensure the start date is earlier than the end date
    if (startDate > endDate) {
        throw new Error("Start date must be earlier than end date");
    }

    let totalDays = 0;
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        // Check if the current day is a weekday (0 = Sunday, 6 = Saturday)
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            totalDays++;
        }
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return totalDays;
}

// Example usage
const start = new Date("2023-10-01");
const end = new Date("2023-10-31");
console.log(`Workdays between ${start.toDateString()} and ${end.toDateString()}: ${calculateWorkdays(start, end)}`);