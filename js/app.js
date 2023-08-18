import { calculateColorBands } from './resistance.js';
import { calculateTolerance } from './tolerance.js';

const resistanceInput = document.querySelector('#valueResistence');
const form = document.querySelector('#form');
const toleranceInput = document.querySelector('#tolerance');
const [firstBand, secondBand, thirdBand, fourthBand] =
  document.querySelectorAll('.band');

resistanceInput.addEventListener('input', handleResistanceInput);
form.addEventListener('submit', handleFormSubmit);
toleranceInput.addEventListener('change', handleToleranceChange);

function handleResistanceInput(event) {
  const value = event.target.value.trim().replace(/[^0-9]/g, '');
  if (parseInt(value) > 10000000000) {
    event.target.value = '10000000000';
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
