"use strict";
let strUserDay = prompt("Enter the number of the day of the week");
if (strUserDay !== null) {
    let numUserDay = +strUserDay;
    switch (numUserDay) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("What have you done?");
    }
}
