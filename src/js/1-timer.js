/* ------------ LIBRARIES ------------ */

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ----------------------------------- */

const section = document.querySelector('section');
section.classList.add('section');
const homeLink = document.querySelector('a');
homeLink.classList.add('to-home-link');

const input = document.querySelector('#datetime-picker');
input.classList.add('date-input');
const button = document.querySelector('button[data-start]');
button.classList.add('start-btn');
const timer = document.querySelector('.timer');

const daysValue = timer.querySelector('[data-days]');
const hoursValue = timer.querySelector('[data-hours]');
const minutesValue = timer.querySelector('[data-minutes]');
const secondsValue = timer.querySelector('[data-seconds]');

let userSelectedDate = null;
const date = new Date();
button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() < date.getTime()) {
      // button.disabled = true;
      iziToast.show({
        title: 'Dude!',
        message: 'Please choose a date in the future',
        // titleColor: 'rgb(178, 34, 34)',
        backgroundColor: 'rgb(205,92,92)',
      });
    } else {
      button.disabled = false;
    }
  },
};
const fp = flatpickr(input, options);

button.addEventListener('click', handleStart);

function handleStart(event) {
  button.disabled = true;
  // const remainingMs = userSelectedDate - date;
  // console.log(remainingMs);

  // let remainingTime = convertMs(remainingMs);
  // console.log(remainingTime);

  // const daysFormatted = addLeadingZero(String(remainingTime.days));
  // const hoursFormatted = addLeadingZero(String(remainingTime.hours));
  // const minutesFormatted = addLeadingZero(String(remainingTime.minutes));
  // const secondsFormatted = addLeadingZero(String(remainingTime.seconds));

  // daysValue.innerHTML = daysFormatted;
  // hoursValue.innerHTML = hoursFormatted;
  // minutesValue.innerHTML = minutesFormatted;
  // secondsValue.innerHTML = secondsFormatted;

  const intervalId = setInterval(() => {
    const currentDate = new Date();
    const remainingMs = userSelectedDate - currentDate;
    if (remainingMs > 0) {
      let remainingTime = convertMs(remainingMs);
      console.log(remainingTime);

      const daysFormatted = addLeadingZero(String(remainingTime.days));
      const hoursFormatted = addLeadingZero(String(remainingTime.hours));
      const minutesFormatted = addLeadingZero(String(remainingTime.minutes));
      const secondsFormatted = addLeadingZero(String(remainingTime.seconds));

      daysValue.innerHTML = daysFormatted;
      hoursValue.innerHTML = hoursFormatted;
      minutesValue.innerHTML = minutesFormatted;
      secondsValue.innerHTML = secondsFormatted;
    } else {
      clearInterval(intervalId);
      iziToast.show({
        title: 'Dude!',
        message: 'Your time is up',
        backgroundColor: 'rgb(143,188,143)',
      });
    }
  }, 1000);
}

const addLeadingZero = value => {
  if (value.length === 1) {
    return value.padStart(2, '0');
  } else {
    return value;
  }
};

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
