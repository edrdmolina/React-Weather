// Write function that takes in unix time and converts to hour of the day
export default function unixToHuman(dt = Date.now(), timeZone = 0, format = undefined) {    
    const daysOfMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    // Offset the date-time variable with your timezone.
    dt += timeZone;
    // Calculate days since Jan 1st 1970
    let daysTillDt = parseInt(dt / (24 * 60 * 60), 10)
    let extraTime = dt % (24 * 60 * 60);
    const res = {
        year: 1970,
        month: 1,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0
    }

    // Calculate Year
    while(daysTillDt >= 365) {
        if(isLeapYear(res.year)) daysTillDt -= 366;
        else daysTillDt -= 365;
        res.year++;
    }
    // if in leap year update February days count
    if(isLeapYear(res.year)) daysOfMonth[1] = 29;
    // Calculate months in year
    for(let m of daysOfMonth) {
        if(daysTillDt > m) {
            res.month++;
            daysTillDt -= m;
        }
    }
    // update date to remaining days
    res.date = daysTillDt;
    // update hours
    res.hour = Math.trunc(extraTime / 3600);
    // update minutes
    res.minute = Math.trunc((extraTime % 3600) / 60);
    // update seconds
    res.second = Math.trunc(((extraTime % 3600) % 60) / 1000)

    if(!format) return res;
    else return res[format];
}

function isLeapYear(year) {
    if((year % 400 === 0 || year % 4 === 0) && year % 100 !== 0) return true;
    else return false;
}
