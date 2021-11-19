//version 1


//display todays date as a heading, in todaysDate Id

var rightNow = new Date();

console.log(rightNow);

options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

console.log(rightNow.toLocaleDateString("en-US", options));


var rightNowText = JSON.stringify(rightNow.toLocaleDateString("en-US", options))

console.log()


var currentDayID = document.getElementById("currentDay");

currentDayID.textContent = rightNowText.split('"')[1];



//then display a hourly schedule with hour and task and save button as list


//in the task there will be an input text box

//if current time is past the hour on the schedule it will be grey

//red is current time hour

//green is future


//use localstorage to store the tasks get and setItem


//add a flipclock to countdown each hour