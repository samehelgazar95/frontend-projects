let hr = document.querySelector('.clock .hr');
let min = document.querySelector('.clock .min');
let sec = document.querySelector('.clock .sec');

function setDate() {
  let date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let secDeg = (second / 60) * 360 + 180;
  sec.style.transform = `rotate(${secDeg}deg)`;

  let minDeg = (minute / 60) * 360 + (second / 60) * 6 + 180;
  min.style.transform = `rotate(${minDeg}deg)`;

  let hrDeg = (hour / 12) * 360 + (minute / 60) * 30 + 180;
  hr.style.transform = `rotate(${hrDeg}deg)`;
}

let clockInterval = setInterval(setDate, 1000);
