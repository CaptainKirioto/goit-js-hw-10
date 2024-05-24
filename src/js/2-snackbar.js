/* ------------ LIBRARIES ------------ */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ----------------------------------- */

const section = document.querySelector('section');
section.classList.add('section');
const homeLink = document.querySelector('a');
homeLink.classList.add('to-home-link');

const form = document.querySelector('.form');

const delay = form.querySelector('label');
delay.classList.add('delay-label');
const delayInput = delay.querySelector('input[name="delay"]');

const fieldset = form.querySelector('fieldset');
const fulfilledInput = fieldset.querySelector('input[value="fulfilled"]');
const rejectedInput = fieldset.querySelector('input[value="rejected"]');

const submitBtn = form.querySelector('button[type="submit"]');

// submitBtn.addEventListener('submit', handleSubmit);

// const handleSubmit = event => {
//     const promise = new Promise((resolve, reject) => {
//       if
//   });
// };
