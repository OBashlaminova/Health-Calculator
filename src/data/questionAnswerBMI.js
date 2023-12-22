import React from 'react';

const questionAnswerBMI = [
  {
    key: '0',
    label: 'What is BMI?',
    children: (
      <p>
        BMI, or Body Mass Index, is a numerical measure of a person&apos;s body weight in relation
        to their height. It is a widely used indicator of whether a person has a healthy body
        weight.
      </p>
    )
  },
  {
    key: '1',
    label: 'How is BMI calculated?',
    children: (
      <p>
        BMI is calculated by dividing a person&apos;s weight in kilograms by the square of their
        height in meters. The formula is: BMI = weight (kg) / (height (m))^2.
      </p>
    )
  },
  {
    key: '2',
    label: 'Is this BMI calculator suitable for people of all ages?',
    children: (
      <p>
        Yes, this BMI calculator is suitable for individuals of all ages. However, keep in mind that
        interpretation may vary for children and adolescents, as their BMI is evaluated against
        age-specific percentiles.
      </p>
    )
  },
  {
    key: '3',
    label: 'What does your result mean?',
    children: (
      <p>
        Your BMI result will be displayed as a number with one of these weight categories:
        underweight, healthy weight, overweight, obese. The categorization helps provide a general
        assessment of your weight status based on established ranges.
      </p>
    )
  },
  {
    key: '4',
    label: 'Can BMI accurately determine body composition?',
    children: (
      <p>
        No, the BMI calculation is just one measure of health. For instance, it cannot distinguish
        between muscle and fat. For example, individuals with high muscle mass may register as
        overweight or obese despite having low body fat. For a more comprehensive assessment,
        consider additional measures such as waist circumference.
      </p>
    )
  },
  {
    key: '5',
    label: 'What should I do if my BMI indicates underweight?',
    children: (
      <p>
        If your BMI suggests underweight, it&apos;s important to consult with a healthcare
        professional. They can help identify potential causes, such as nutritional deficiencies or
        underlying health issues, and work with you to create a plan for healthy weight gain.
      </p>
    )
  },
  {
    key: '6',
    label: 'What should I do if my BMI indicates a healthy weight?',
    children: (
      <p>
        If your BMI falls within the healthy weight range, maintaining a balanced diet, regular
        physical activity, and adopting a healthy lifestyle can contribute to overall well-being.
        Regular health check-ups are also recommended.
      </p>
    )
  },
  {
    key: '7',
    label: 'What should I do if my BMI indicates overweight or obesity?',
    children: (
      <p>
        If your BMI suggests overweight or obesity, it&apos;s advisable to consult with a healthcare
        professional. They can provide guidance on lifestyle modifications, dietary changes, and
        exercise routines to support weight management and overall health. A higher BMI increases
        the chance of developing long-term conditions, such as type 2 diabetes and heart disease.
      </p>
    )
  }
];

export default questionAnswerBMI;
