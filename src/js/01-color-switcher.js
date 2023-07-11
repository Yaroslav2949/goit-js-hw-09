const CHANGE_COLOR_DELAY = 1000;
let timerId = null;

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.btnStop.setAttribute('disabled', true);

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  refs.btnStart.setAttribute('disabled', true);
  refs.btnStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DELAY);
}

function onBtnStop() {
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
