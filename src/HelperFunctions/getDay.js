// Write a function that returns the day of the week when given the month, day and year
// https://artofmemory.com/blog/how-to-calculate-the-day-of-the-week/
export default function getDay(month, date, year) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    //> Find Year Code
    // get last two digits of year
    const YY = parseInt(String(year).slice(2));
    // (YY + (YY div 4)) mod 7
    const yearCode = (YY + (Math.trunc(YY / 4))) % 7;

    //> Find Month Code
    const monthCodes = [0,3,3,6,1,4,6,2,5,0,3,5];
    const monthCode = monthCodes[month - 1];

    //> Find Century Code
    const centuryCodes = {
        '1700' : 4,
        '1800' : 2,
        '1900' : 0,
        '2000' : 6,
        '2100' : 4,
        '2200' : 2,
        '2300' : 0
    }
    // replace last two digits of year with 00's
    const CC = String(year).slice(0,2) + '00';
    const centuryCode = centuryCodes[CC];

    //> Check if year is leap year
    let isLeapYear = year % 4 === 0 ? true : false;

    let weekDay;

    if(isLeapYear && month < 3) {
        weekDay = (yearCode + monthCode + centuryCode + date - 1) % 7;
    } else {
        weekDay = (yearCode + monthCode + centuryCode + date) % 7;
    }
    return weekDays[weekDay];
}