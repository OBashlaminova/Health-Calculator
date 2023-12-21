import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, InputNumber, Radio, Space } from 'antd';

import './Form.scss';

FormComponent.propTypes = {
  setValue: PropTypes.func,
  calculateValue: PropTypes.func
};

function FormComponent({ setValue, calculateValue }) {
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

  function handleSubmit({ height, weight }) {
    setValue(calculateValue(height, weight));
  }

  return (
    <Form
      id="form"
      className="form"
      {...layout}
      validateMessages={validateMessages}
      onFinish={handleSubmit}
    >
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
