let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let day = document.getElementById("day");
let date = document.getElementById("date");
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.addEventListener("DOMContentLoaded", () => {
  day.style.color = `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`;
  date.style.color = `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`;
  hour.style.color =
    minutes.style.color =
    seconds.style.color =
      `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`;
  setClockTime();
});

function setClockTime() {
  let currentTime = new Date();
  day.textContent = days[currentTime.getDay()] + ", ";
  date.textContent =
    months[currentTime.getMonth()] +
    " " +
    currentTime.getDate() +
    ", " +
    currentTime.getFullYear() +
    ", ";
  hour.textContent = currentTime.getHours() + ":";
  seconds.textContent = currentTime.getSeconds();
  minutes.textContent = currentTime.getMinutes() + ":";
  setTimeout(setClockTime, 1000);
}
