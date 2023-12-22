function calculateBMR({ age, sex, height, weight }) {
  if (sex === 'male') {
    return Math.round(13.397 * weight + 4.799 * height - 5.677 * age + 88.362);
  }

  if (sex === 'female') {
    return Math.round(9.247 * weight + 3.098 * height - 4.33 * age + 447.593);
  }
}

export default calculateBMR;
