function randColor() {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let randIndex = Math.floor(Math.random() * 16);
    color += hex[randIndex];
  }
  return color;
}

function changeBodyBackgroundColor() {
  document.addEventListener('click', (e) => {
    let colorClassName = e.target.closest('button').classList[0];
    if (colorClassName == 'random')
      document.body.style.background = randColor();
    else document.body.style.background = colorClassName;
  });
}

changeBodyBackgroundColor();

function clock(clockClass) {
  let clock = document.querySelector(clockClass);
  setInterval(() => {
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hr < 12
      ? (clock.children[3].innerHTML = 'AM')
      : (clock.children[3].innerHTML = 'PM');

    if (hr > 12) hr = hr - 12;
    hr < 10
      ? (clock.children[0].innerHTML = '0' + hr)
      : (clock.children[0].innerHTML = hr);

    min < 10
      ? (clock.children[1].innerHTML = '0' + min)
      : (clock.children[1].innerHTML = min);

    sec < 10
      ? (clock.children[2].innerHTML = '0' + sec)
      : (clock.children[2].innerHTML = sec);
  }, 1000);
}
clock('body .clock');

function timer(clockClass) {
  let timer = document.querySelector(clockClass);
  timer.children[0].innerHTML = '00';
  timer.children[1].innerHTML = '00';
  setInterval(() => {
    let minTimer = timer.children[0];
    let secTimer = timer.children[1];

    secTimer.innerHTML = +secTimer.innerHTML + 1;
    if (secTimer.innerHTML < 10) secTimer.innerHTML = '0' + +secTimer.innerHTML;

    if (secTimer.innerHTML == 60) {
      secTimer.innerHTML = '00';
      minTimer.innerHTML = +minTimer.innerHTML + 1;
      if (minTimer.innerHTML < 10)
        minTimer.innerHTML = '0' + +minTimer.innerHTML;
    }
  }, 1000);
}
timer('body .timer');
