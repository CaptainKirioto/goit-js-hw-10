/* ------------ LIBRARIES ------------ */

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ------------ For styling ------------ */

const section = document.querySelector('section');
section.classList.add('section');
const homeLink = document.querySelector('a');
homeLink.classList.add('to-home-link');

/* ----------------------------------- */

const input = document.querySelector('#datetime-picker');

const button = document.querySelector('button[data-start]');
button.classList.add('start-btn');
const timer = document.querySelector('.timer');

const daysValue = timer.querySelector('[data-days]');
const hoursValue = timer.querySelector('[data-hours]');
const minutesValue = timer.querySelector('[data-minutes]');
const secondsValue = timer.querySelector('[data-seconds]');

let userSelectedDate = null;
button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      button.disabled = true;
      iziToast.error({
        position: 'topRight',
        icon: '',
        title: 'Dude!',
        message: 'Please choose a date in the future',
      });
    } else {
      button.disabled = false;
    }
  },
};
const fp = flatpickr(input, options);

button.addEventListener('click', handleStart);

let selectedDate = null;

function handleStart(event) {
  button.disabled = true;
  input.disabled = true;

  selectedDate = userSelectedDate;

  const intervalId = setInterval(() => {
    const currentDate = new Date();
    const remainingMs = selectedDate - currentDate;
    if (remainingMs > 0) {
      const convertedTime = convertMs(remainingMs);
      daysValue.innerHTML = addLeadingZero(convertedTime.days);
      hoursValue.innerHTML = addLeadingZero(convertedTime.hours);
      minutesValue.innerHTML = addLeadingZero(convertedTime.minutes);
      secondsValue.innerHTML = addLeadingZero(convertedTime.seconds);
    } else {
      clearInterval(intervalId);
      iziToast.success({
        position: 'topRight',
        icon: '',
        title: 'Dude!',
        message: 'Your time is up',
      });
      input.disabled = false;
    }
  }, 1000);
}

/* ------------ Adding 0 ------------ */

const addLeadingZero = value => {
  value = String(value);
  if (value.length === 1) {
    return value.padStart(2, '0');
  } else {
    return value;
  }
};

/* ------------ Converting ms ------------ */

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
