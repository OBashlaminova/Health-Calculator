function calculateBMI(height, weight) {
  const bmi = Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;

  return bmi;
}

export default calculateBMI;
