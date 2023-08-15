import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import AntButton from './AntButton';

const App = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const formItemLayout =
       {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        };
  const buttonItemLayout =
    {
          wrapperCol: {
            span: 14,
            offset: 1,
          },
    };

    const handleSubmit = (e) => {
        console.log("hello");
        let totalIncome = form.getFieldValue("totalIncome");
        let deductions = form.getFieldValue("deductions");
        let taxableIncome = totalIncome - deductions;

    }
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      style={{
        maxWidth: 600,
        padding: 3
      }}
    >
      <Form.Item label="Total Income" name={"totalIncome"}>
        <Input placeholder="Total Income from all streams" />
      </Form.Item>
      <Form.Item label="Deductions" name={"deductions"}>
        <Input placeholder="All dedcutions" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <AntButton type="center" align="start" handleSubmit = {handleSubmit} name='submit'></AntButton>
      </Form.Item>
    </Form>
  );
};
export default App;

