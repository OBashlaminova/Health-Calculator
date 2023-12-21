import React, { useState, useMemo } from 'react';
import { Flex, Typography, Result } from 'antd';

const { Title, Paragraph } = Typography;

import Form from 'Components/Form/Form';
import Header from 'Components/Header/Header';

import calculateBMI from 'Features/calculateBMI';
import getDataBMI from 'Features/getDataBMI';

import 'Styles/paragraph.scss';

function BMIPage() {
  const [valueBMI, setValueBMI] = useState();

  const data = useMemo(() => getDataBMI(valueBMI), [valueBMI]);

  return (
    <>
      <Header />

      <Flex gap="middle" align="center" vertical>
        <Title level={2}>BMI</Title>
        <Form setValue={setValueBMI} calculateValue={calculateBMI} />
        {valueBMI && (
          <Result
            icon={data.icon}
            title={`Your BMI is ${valueBMI}%`}
            subTitle={`Your BMI is in the ${data.category} category.`}
          />
        )}

        <Title level={3}>Calculate your body mass index (BMI) for adults</Title>
        <Paragraph className="paragraph">
          Use this service to check the BMI of an adult aged 18 and over.
        </Paragraph>

        <Paragraph className="paragraph">
          You should not use this tool to diagnose any symptoms. If you are worried about your
          weight, contact your local pharmacist or GP surgery.
        </Paragraph>

        <Title level={4}>Who should not use this tool</Title>
        <Paragraph className="paragraph">
          You should not use this tool if you, or the person you&apos;re using it for:
          <ul>
            <li>are under 18 years old</li>
            <li>are pregnant</li>
            <li>have an eating disorder, or think you may have one</li>
            <li>have a condition that affects your height</li>
          </ul>
        </Paragraph>

        <Title level={4}>What you will need</Title>
        <Paragraph className="paragraph">
          To use the calculator, you will need to know your:
          <ul>
            <li>height</li>
            <li>weight</li>
          </ul>
        </Paragraph>

        <Title level={4}>Your result</Title>
        <Paragraph className="paragraph">
          Your BMI result will be displayed as a number with one of these weight categories:
          <ul>
            <li>underweight</li>
            <li>healthy weight</li>
            <li>overweight</li>
            <li>obese</li>
          </ul>
        </Paragraph>

        <Title level={4}>What your result means</Title>
        <Paragraph className="paragraph">
          A higher BMI increases the chance of developing long-term conditions, such as type 2
          diabetes and heart disease.
        </Paragraph>
        <Paragraph className="paragraph">
          The BMI calculation is just one measure of health. It cannot tell the difference between
          muscle and fat. For example, if you have a lot of muscle, you may be classed as overweight
          or obese despite having low body fat.
        </Paragraph>
      </Flex>
    </>
  );
}

export default BMIPage;
