/*
    Age Verification project:

    - User will input their date of birth
    - Code will check the DOB entered and compare it to the date for eligibilty: Today's day 21 years ago
    - If the DOB is valid, display Access Granted
    - If the DOB is invalid, display Access Denied
*/

// console.log(new Date().toString());
const today = new Date();

const dateInput = document.getElementById('dateInput');
const validYear = today.getFullYear() - 21;
const validMonth = today.getMonth();
const validDay = today.getDate();

// console.log(today, dateInput, validYear, validMonth, validDay)
// console.log(validYear, validMonth, validDay);

const getDOB =()=> {
    const userDate = new Date(dateInput.value);
    const userYear = userDate.getFullYear();
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    verifyAge(userDate, userYear, userDay, userMonth);
}

const verifyAge =(date, year, month, day)=> {
    const userDate = date;
    const userYear = year;
    const userMonth = month;
    const userDay = day
    
    if (validYear >= userYear) {
        if (validMonth >= userMonth) {
            if (validDay >= userDay) {
                console.log("day is valid")
            } else {
                console.log("denied")
            }
        } else {
            console.log("denied")
        }
    } else {
        console.log("denied")
    }
};

// console.log(today.toDateString());

// const then = new Date();
// const elapsed = then.getTime() - today.getTime();

// console.log(then.toDateString());
// console.log(elapsed);


// const validAge = ;
// need to do an if else statement on if the age of person is over 21 and if not deny access

// can we do DateNow and then just subtract it by 21 years?

// const ageDistance = Date.parse("12 20 02");

// console.log(today);
// console.log(ageDistance);
