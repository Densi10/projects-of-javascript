// generate a random number

const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
let startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBg, 1000);
  }
  function changeBg() {
    document.body.style.backgroundColor = randomColor();
  }
};

let stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
