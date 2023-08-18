const RESISTANCE_COLORS = [
  '#000000',
  '#371c1c',
  '#cc0000',
  '#d87347',
  '#e6c951',
  '#528f65',
  '#0f5190',
  '#6967ce',
  '#7d7d7d',
  '#ffffff',
  '#8080804f',
];

function convertIntoDigits(resistanceValue) {
  return resistanceValue.split('');
}

function calculateColorBands(
  resistanceValue,
  firstBand,
  secondBand,
  thirdBand
) {
  const [firstDigit, secondDigit] = convertIntoDigits(resistanceValue).map(
    (digit) => parseInt(digit)
  );
  firstBand.style.backgroundColor = RESISTANCE_COLORS[firstDigit];
  secondBand.style.backgroundColor =
    firstDigit === 0
      ? RESISTANCE_COLORS[firstDigit]
      : RESISTANCE_COLORS[secondDigit];
  calculateMultiplier(resistanceValue, thirdBand);
}

function calculateMultiplier(resistanceValue, thirdBand) {
  const resistance = parseInt(resistanceValue);
  const color = RESISTANCE_COLORS.find(
    (color, index) => resistance < Math.pow(10, index + 1)
  );
  setColorBandMultiplier(color, thirdBand);
}

function setColorBandMultiplier(color, thirdBand) {
  thirdBand.style.backgroundColor = color;
}

export { calculateColorBands };
