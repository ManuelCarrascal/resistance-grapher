import { calculateColorBands } from './resistance.js';
import { calculateTolerance } from './tolerance.js';

const resistanceInput = document.querySelector('#resistance-value');
const form = document.querySelector('#resistance-form');
const toleranceInput = document.querySelector('#tolerance');
const [firstBand, secondBand, thirdBand, fourthBand] =
  document.querySelectorAll('.band');

resistanceInput.addEventListener('input', handleResistanceInput);
form.addEventListener('submit', handleFormSubmit);
toleranceInput.addEventListener('change', handleToleranceChange);

resistanceInput.addEventListener('keydown', (event) => {
  const key = event.key;
  if ((isNaN(key) || key === ' ') && key !== 'Backspace' && key !== 'Delete') {
    event.preventDefault();
  }
});

resistanceInput.addEventListener('blur', (event) => {
  const value = event.target.value.trim().replace(/[^0-9]/g, '');
  const parsedValue = parseInt(value);
  event.target.value = isNaN(parsedValue) ? '' : Math.round(parsedValue);
});

function handleResistanceInput(event) {
  const value = event.target.value.trim().replace(/[^0-9]/g, '');
  if (parseInt(value) > 99999999999) {
    event.target.value = '99999999999';
  }
  const resistanceValue = resistanceInput.value;
  if (resistanceValue === '') {
    [
      firstBand.style.backgroundColor,
      secondBand.style.backgroundColor,
      thirdBand.style.backgroundColor,
    ] = ['#8080804f', '#8080804f', '#8080804f'];
    fourthBand.classList.remove('gold', 'silver');
    return;
  }
  calculateColorBands(
    resistanceValue,
    firstBand,
    secondBand,
    thirdBand,
    fourthBand
  );
}

function handleFormSubmit(event) {
  event.preventDefault();
  const resistanceValue = resistanceInput.value;
  if (resistanceValue === '') {
    console.log('vacio');
    return;
  }
  calculateColorBands(
    resistanceValue,
    firstBand,
    secondBand,
    thirdBand,
    fourthBand
  );
}

function handleToleranceChange(event) {
  const toleranceValue = event.target.value;
  calculateTolerance(toleranceValue, fourthBand);
}
