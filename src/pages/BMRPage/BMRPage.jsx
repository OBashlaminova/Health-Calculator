import React, { useState, useMemo } from 'react';
import { Flex, Typography, Table, Collapse } from 'antd';

const { Title } = Typography;

import Footer from 'Components/Footer/Footer';
import Form from 'Components/Form/Form';
import Header from 'Components/Header/Header';

import questionAnswerBMR from 'Data/questionAnswerBMR';
import tableColumns from 'Data/tableColumnsBMR';

import calculateBMR from 'Features/calculateBMR';
import getDataBMR from 'Features/getDataBMR';

import 'Styles/global.scss';

function BMRPage() {
  const [valueBMR, setValueBMR] = useState();

  const tableData = useMemo(() => getDataBMR(valueBMR), [valueBMR]);

  return (
    <div className="page-container">
      <Header />

      <Flex gap="middle" align="center" vertical>
        <Title level={2}>BMR</Title>
        <Form setValue={setValueBMR} calculateValue={calculateBMR} />

        {valueBMR && <Table dataSource={tableData} columns={tableColumns} pagination={false} />}

        <Collapse className="collapse" items={questionAnswerBMR} />
      </Flex>

      <Footer />
    </div>
  );
}

export default BMRPage;
