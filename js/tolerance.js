const TOLERANCE_COLORS = { 5: 'gold', default: 'silver' };

function calculateTolerance(toleranceValue, fourthBand) {
  fourthBand.classList.remove('gold', 'silver');
  fourthBand.classList.add(
    TOLERANCE_COLORS[toleranceValue] || TOLERANCE_COLORS.default
  );
}

export { calculateTolerance };
