import { Notify } from 'notiflix/build/notiflix-notify-aio';
// отримуємо доступ до форми
const formInput = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
// слухач подій
formInput.addEventListener('submit', onSubmiForm);

function onSubmiForm(e) {
  e.preventDefault();
  // приводимо до числа значення в інпутах 
  let delay = Number(delayInput.value);
  let step = Number(stepInput .value);
  let amount = Number(amountInput.value);
//  перебираємо інпут amount який задає кількість створення промісів та додаємо на кожній ітерації крок до затримки часу згідно умови завдання
  for (let i = 1; i <= amount; i += 1) {
    delay += step;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
     
  }
}

function createPromise(position, delay) {
  const object = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(object);
      } else {
        reject(object);
      }
    }, delay);
  });
}


