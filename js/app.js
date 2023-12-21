/*
    Age Verification project:

    - User will input their date of birth
    - Code will check the DOB entered and compare it to the date for eligibilty: Today's day 21 years ago
    - If the DOB is valid, display Access Granted
    - If the DOB is invalid, display Access Denied
*/

const today = new Date();

const validYear = today.getFullYear() - 21;
const validMonth = today.getMonth();
const validDay = today.getDate() -1;

const dateInput = document.getElementById('dateInput');
const checkbox = document.getElementById('checkbox');

const message = document.getElementById('message');
let messageText = ""; 

const validate =()=> {
    const isChecked = checkbox.checked;
    if (!isChecked) { // the "!" is used to check if the statement is false. so it reads as "if isn't isChecked: do stuff" or "if isChecked isn't on"
        messageText = "Check the box, bud"
        message.innerHTML = `
            ${messageText}
        `
    } else {
        messageText = "";
        getDOB();
    }
}

const getDOB =()=> {
    const userDate = new Date(dateInput.value);
    const userYear = userDate.getFullYear();
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    verifyAge(userYear, userMonth, userDay);
}

const verifyAge =(year, month, day)=> {
    const userYear = year;
    const userMonth = month;
    const userDay = day;
    
    if (validYear >= userYear) {
        if (validMonth >= userMonth) {
            if (validDay >= userDay) {
                messageText = "Haha, you're old"
                message.innerHTML = `
                ${messageText}
            `
            } else {
                messageText = "Go to Jail"
                message.innerHTML = `
                ${messageText}
            `
            }
        } else {
            messageText = "Go to Jail"
            message.innerHTML = `
            ${messageText}
        `
        }
    } else {
        messageText = "Go to Jail"
        message.innerHTML = `
        ${messageText}
    `
    }
};
