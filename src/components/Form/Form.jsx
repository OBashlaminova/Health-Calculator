import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, InputNumber, Radio, Space } from 'antd';

import 'Styles/global.scss';

FormComponent.propTypes = {
  calculateValue: PropTypes.func,
  setAge: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  setValue: PropTypes.func
};

function FormComponent({ setAge, setValue, calculateValue }) {
  const validateMessages = {
    required: '${label} is required!'
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };

  const layoutButtons = {
    wrapperCol: { offset: 4, span: 16 }
  };

  function handleSubmit({ age, sex, height, weight }) {
    setValue(calculateValue({ age, sex, height, weight }));

    if (setAge) {
      setAge(age);
    }
  }

  return (
    <Form
      id="form"
      className="form"
      {...layout}
      validateMessages={validateMessages}
      onFinish={handleSubmit}
    >
      <Form.Item label="Age" name="age" rules={[{ required: true }]}>
        <InputNumber className="form__input" />
      </Form.Item>

      <Form.Item label="Sex" name="sex" rules={[{ required: true }]}>
        <Radio.Group className="form__input">
          <Radio.Button value="male">Male</Radio.Button>
          <Radio.Button value="female">Female</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Height" name="height" rules={[{ required: true }]}>
        <InputNumber className="form__input" />
      </Form.Item>

      <Form.Item label="Weight" name="weight" rules={[{ required: true }]}>
        <InputNumber className="form__input" />
      </Form.Item>

      <Form.Item {...layoutButtons}>
        <Space>
          <Button type="primary" htmlType="submit" id="submit" value="submit">
            Calculate
          </Button>
          <Button type="default" htmlType="reset" value="reset">
            Clear
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default FormComponent;
