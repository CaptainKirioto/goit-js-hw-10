import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const section = document.querySelector('section');
section.classList.add('section');
const homeLink = document.querySelector('a');
homeLink.classList.add('to-home-link');

const input = document.querySelector('#datetime-picker');
input.classList.add('date-input');
const button = document.querySelector('button');
button.classList.add('start-btn');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr(input, options);
