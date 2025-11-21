function updateDisplay() {

const now = new Date();

const formattedDateTime = now.toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short'
 });

 document.getElementById('datetime-display').innerHTML = formattedDateTime;        
}
 updateDisplay();
setInterval(updateDisplay, 1000);

//Question 2
const now = new Date();
  const currentMonth = now.toLocaleString('en-US', { month: 'long' })
  alert(`The current month is ${currentMonth}.`);

//Question 3
const now1 = new Date();
 const currentDay = now1.toLocaleString('en-US', { weekday: 'short' });
 if (currentDay === 'Sat' || currentDay === 'Sun') {
    alert("It's Fun day");
 }  

//Question 4
const now2 = new Date();
 const currentDate = now2.getDate();
    if (currentDate < 16) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month");
    }
//Question 5
const now3 = new Date();
 const currentMinutes = now3.getMinutes();
    const millisecondsSinceEpoch = now3.getTime();
    alert(`Current Minutes: ${currentMinutes}\nMilliseconds since January 1, 1970: ${millisecondsSinceEpoch}`);

//Question 6
const now4 = new Date();
 const currentHour = now4.getHours();
    if (currentHour < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }
//Question 7
const now5 = new Date();
 alert(`Current Date and Time: ${now5}`);
    const pastDate = new Date('December 31, 2020 00:00:00');
    alert(`Date and Time 100 years ago: ${pastDate}`);
//Question 8
const now6 = new Date();
 const currentYear = now6.getFullYear();
    alert(`Current Year: ${currentYear}`);
    const pastYear = new Date();
    pastYear.setFullYear(currentYear - 100);
    alert(`100 years back, it was: ${pastYear.getFullYear()}`);
//Question 9
const now7 = new Date();
 const referenceDate = new Date('April 25, 2023 00:00:00');
    const referenceMilliseconds = referenceDate.getTime();
    const currentMilliseconds = now7.getTime();
    const differenceInMilliseconds = currentMilliseconds - referenceMilliseconds;
    const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    alert(`Elapsed minutes since April 25, 2023: ${differenceInMinutes} minutes`);
//Question 10
const now8 = new Date();
 const currentSeconds = now8.getSeconds();
    alert(`Current Seconds: ${currentSeconds}`);
    const oneHourAgo = new Date(now8.getTime() - (60 * 60 * 1000));
    alert(`Date and Time one hour ago: ${oneHourAgo}`);
//Question 11
const now9 = new Date();
 const currentYear1 = now9.getFullYear();
    alert(`Current Year: ${currentYear1}`);
    const pastYear1 = new Date();
    pastYear1.setFullYear(currentYear1 - 100);
    alert(`100 years back, it was: ${pastYear1.getFullYear()}`);
    