import React, { useState, useMemo } from 'react';
import { Flex, Typography, Result, Collapse } from 'antd';

const { Title } = Typography;

import Footer from 'Components/Footer/Footer';
import Form from 'Components/Form/Form';
import Header from 'Components/Header/Header';

import questionAnswerBMI from 'Data/questionAnswerBMI';

import calculateBMI from 'Features/calculateBMI';
import getDataBMI from 'Features/getDataBMI';

import 'Styles/global.scss';

function BMIPage() {
  const [valueBMI, setValueBMI] = useState();
  const [age, setAge] = useState();

  const data = useMemo(() => getDataBMI(age, valueBMI), [age, valueBMI]);

  return (
    <div className="page-container">
      <Header />
      <Flex gap="middle" align="center" vertical>
        <Title level={2}>BMI</Title>
        <Form setAge={setAge} setValue={setValueBMI} calculateValue={calculateBMI} />

        {valueBMI && (
          <Result
            icon={data.icon}
            title={`Your BMI is ${valueBMI}%`}
            subTitle={`Your BMI is in the ${data.category} category.`}
          />
        )}

        <Collapse className="collapse" items={questionAnswerBMI} />
      </Flex>
      <Footer />
    </div>
  );
}

export default BMIPage;
