const regex = /^[0-9]*$/;
const input = document.querySelector('#valueResistence');
const form = document.querySelector('#form');

let color;

window.onload = () => {
  form.addEventListener('submit', validateForm);
};

input.addEventListener('input', (e) => {
  const value = e.target.value.trim();
  if (!regex.test(value)) {
    e.target.value = value.replace(/[^0-9]/g, '');
  }
});

function validateForm(e) {
  e.preventDefault();
  const resistenceValue = input.value;
  if (resistenceValue === '') {
    console.log('vacio');
    return;
  }
  calculateColorBands(resistenceValue);
}

function calculateColorBands(resistenceValue) {
  setColorBands(resistenceValue);
  calculateMultiplier(resistenceValue);
}

function convertIntoDigits(resistanceValue) {
  const digits = resistanceValue.split('');
  return digits;
}

function calculateMultiplier(resistanceValue) {
  switch (true) {
    case resistanceValue >= 0 && resistanceValue < 100:
      color = 'black';
      setColorBandMultiplier(color);
      break;
    case resistanceValue >= 100 && resistanceValue < 1000:
      color = 'brown';
      setColorBandMultiplier(color);

      break;
    case resistanceValue >= 1000 && resistanceValue < 10000:
      color = 'red';
      setColorBandMultiplier(color);

      break;
    case resistanceValue >= 10000 && resistanceValue < 100000:
      color = 'orange';
      setColorBandMultiplier(color);

      break;
    case resistanceValue >= 100000 && resistanceValue < 1000000:
      color = 'yellow';
      setColorBandMultiplier(color);

      break;
    case resistanceValue >= 1000000 && resistanceValue < 10000000:
      color = 'green';
      setColorBandMultiplier(color);

      break;
    case resistanceValue >= 10000000 && resistanceValue < 100000000:
      color = 'blue';
      0;
      setColorBandMultiplier(color);

      break;
    case resistanceValue >= 100000000 && resistanceValue < 1000000000:
      color = 'violet';
      setColorBandMultiplier(color);

      break;
    case resistanceValue >= 1000000000 && resistanceValue < 10000000000:
      color = 'gray';
      setColorBandMultiplier(color);

      break;
    case resistanceValue >= 10000000000 && resistanceValue < 100000000000:
      color = 'white';
      setColorBandMultiplier(color);

      break;
  }
}

function setColorBandMultiplier(value) {
  const band = document.querySelector('#third-band');
  band.style.backgroundColor = value;
}

function setColorBands(resistanceValue) {
  const digits = convertIntoDigits(resistanceValue);
  console.log(digits);
  const firstBand = document.querySelector('#first-band');
  const secondBand = document.querySelector('#second-band');

  const colorMap = {
    0: '#000000',
    1: '#371c1c',
    2: '#cc0000',
    3: '#d87347',
    4: '#e6c951',
    5: '#528f65',
    6: '#0f5190',
    7: '#6967ce',
    8: '#7d7d7d',
    9: '#ffffff',
  };
  console.log(digits[0]);
  console.log(colorMap[1]);

  firstBand.style.backgroundColor = colorMap[digits[0]];
  if (digits[0] === '0') {
    secondBand.style.backgroundColor = colorMap[digits[0]];
  }
  secondBand.style.backgroundColor = colorMap[digits[1]];
}
