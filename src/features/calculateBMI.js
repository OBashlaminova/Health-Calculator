function calculateBMI({ height, weight }) {
  return Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;
}

export default calculateBMI;
