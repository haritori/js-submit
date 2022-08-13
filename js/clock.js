const clock = document.querySelector("#clock");
const date = document.querySelector("#date");
const ddayCount = document.querySelector("#count span:last-child");

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  date.innerText = `${year}년 ${month}월 ${day}일`;
}

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function newYear() {
  const today = new Date();
  const newYear = new Date("2023-01-01 00:00:00");
  const toNewYear = newYear.getTime() - today.getTime();

  const day = Math.round(toNewYear / 1000 / 60 / 60 / 24);
  const hours = String(Math.round((toNewYear / 1000 / 60 / 60) % 24)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.round((toNewYear / 1000 / 60) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((toNewYear / 1000) % 60)).padStart(2, "0");

  const dDaytoNewYear = `${day}d ${hours}h ${minutes}m ${seconds}s`;

  ddayCount.innerText = dDaytoNewYear;
}

newYear();
getDate();
getTime();
setInterval(newYear, 1000);
setInterval(getTime, 1000);
