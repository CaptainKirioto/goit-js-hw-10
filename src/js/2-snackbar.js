/* ------------ LIBRARIES ------------ */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ------------ For styling ------------ */

const section = document.querySelector('section');
section.classList.add('section');
const homeLink = document.querySelector('a');
homeLink.classList.add('to-home-link');

/* ----------------------------------- */

const form = document.querySelector('.form');
const delayLabel = form.querySelector('label');
delayLabel.classList.add('delay-label');
const delayInput = delayLabel.querySelector('input[name="delay"]');
const fieldset = form.querySelector('fieldset');
const fulfilledInput = fieldset.querySelector('input[value="fulfilled"]');

form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const delay = parseInt(delayInput.value, 10);
  if (delay < 0) {
    iziToast.show({
      position: 'topRight',
      icon: '',
      title: 'Are you nuts?!',
      message: `Delay can't be negative`,
      backgroundColor: 'rgb(248, 222, 126)',
    });
    return;
  }
  delayInput.value = '';
  const isFulfilled = fulfilledInput.checked;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        position: 'topRight',
        icon: '',
        title: '✅',
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        position: 'topRight',
        icon: '',
        title: '❌',
        message: `Rejected promise in ${delay}ms`,
      });
    });
}
