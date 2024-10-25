const miliSecInYear =  31557600000;
const miliSecondInMonth =  2629800000; 
const miliSecondInDay = 86400000;

let intervalId1 = undefined;
let intervalId2 = undefined;

function tellAge() {
  // Change the background color to a linear gradient
  document.body.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)"; // Example colors

  // Calculate time left for the next birthday
  if (intervalId1 !== undefined) clearInterval(intervalId1);
  getTimeLeft();
  intervalId1 = setInterval(() => {
    getTimeLeft();
  }, 1000);

  // Calculate the age of the person
  if (intervalId2 !== undefined) clearInterval(intervalId2);
  yearOld();
  intervalId2 = setInterval(() => {
    yearOld();
  }, 1000);
}

let getTimeLeft = () => {
  let today = new Date();
  console.log("today:", today);

  const dateEntered = new Date(
    document.querySelector("#age").value + "T00:00:00"
  );
  console.log("entered date:", dateEntered);

  let birthdayDateThisYear = new Date(dateEntered);
  birthdayDateThisYear.setFullYear(today.getFullYear()); // Set the birthday to the current year

  if (today.getTime() > birthdayDateThisYear.getTime()) {
    // If the birthday has passed this year, set the birthday to next year
    birthdayDateThisYear.setFullYear(birthdayDateThisYear.getFullYear() + 1);
  }

  let nextBirthdayDiffInMili = birthdayDateThisYear - today;

  let nextBirthdayInDays = Math.floor(nextBirthdayDiffInMili / miliSecondInDay);
  let nextBirthdayInDaysReminder = nextBirthdayDiffInMili % miliSecondInDay;

  let nextBirthdayInHours = Math.floor(nextBirthdayInDaysReminder / (1000 * 60 * 60));
  let nextBirthdayInHoursReminder = nextBirthdayInDaysReminder % (1000 * 60 * 60);

  let nextBirthdayInMinutes = Math.floor(nextBirthdayInHoursReminder / (1000 * 60));
  let nextBirthdayInMinutesReminder = nextBirthdayInHoursReminder % (1000 * 60);

  let nextBirthdayInSeconds = Math.floor(nextBirthdayInMinutesReminder / 1000);

  console.log(
    `${nextBirthdayInDays} days, ${nextBirthdayInHours} hours, ${nextBirthdayInMinutes} minutes, and ${nextBirthdayInSeconds} seconds left until your next birthday`
  );

  document.querySelector("#visible").classList.remove("hidden");

  document.querySelector("#day").innerHTML = nextBirthdayInDays;
  document.querySelector("#hour").innerHTML = nextBirthdayInHours;
  document.querySelector("#minute").innerHTML = nextBirthdayInMinutes;
  document.querySelector("#second").innerHTML = nextBirthdayInSeconds;
};

let yearOld = () => {
  let today = new Date();
  const dateEntered = new Date(
    document.querySelector("#age").value + "T00:00:00"
  );

  let diffInMili = today - dateEntered;
  console.log("diffInMili:", diffInMili);

  let ageInYear = Math.floor(diffInMili / miliSecInYear);
  let reminderOfYearAge = diffInMili % miliSecInYear;

  let ageInMonth = Math.floor(reminderOfYearAge / miliSecondInMonth);
  let reminderOfMonthAge = reminderOfYearAge % miliSecondInMonth;

  let ageInDay = Math.floor(reminderOfMonthAge / miliSecondInDay);
  let ageInDayReminder = reminderOfYearAge % miliSecondInDay;

  let ageInHour = Math.floor(ageInDayReminder / (1000 * 60 * 60));
  let ageInHourReminder = ageInDayReminder % (1000 * 60 * 60);

  let ageInMinute = Math.floor(ageInHourReminder / (1000 * 60));
  let ageInMinuteReminder = ageInHourReminder % (1000 * 60);

  let ageInSecond = Math.floor(ageInMinuteReminder / 1000);

  console.log(
    `You are ${ageInYear} years, ${ageInMonth} months, ${ageInDay} days, ${ageInHour} hours, ${ageInMinute} minutes, and ${ageInSecond} seconds old`
  );
  document.querySelector("#yearOld").innerHTML = `You are ${ageInYear} years, ${ageInMonth} months, ${ageInDay} days, ${ageInHour} hours, ${ageInMinute} minutes, and ${ageInSecond} seconds old`;
};

