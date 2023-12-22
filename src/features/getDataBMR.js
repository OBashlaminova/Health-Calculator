export default function getDataBMR(valueBMR) {
  return [
    { key: '0', activityLevel: 'Little or no exercise', calories: Math.round(valueBMR * 1.2) },
    {
      key: '1',
      activityLevel: 'Light exercise (1-3 times/week)',
      calories: Math.round(valueBMR * 1.375)
    },
    {
      key: '2',
      activityLevel: 'Moderate exercise (3-5 times/week)',
      calories: Math.round(valueBMR * 1.55)
    },
    {
      key: '3',
      activityLevel: 'Intense exercise (6-7 times/week)',
      calories: Math.round(valueBMR * 1.725)
    },
    {
      key: '4',
      activityLevel: 'Intense exercise or physical job',
      calories: Math.round(valueBMR * 1.9)
    }
  ];
}
