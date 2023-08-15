import React, { useState } from 'react';
import { Button, ConfigProvider } from 'antd';

const theme = {
    token: {
      colorPrimary: '#d21404',
      fontSizeLG: '14px',
      controlHeightLG: '50px',
      borderRadiusLG: '10',
      
    },
  }

const AntButton = ({ name, handleSubmit }) => {
    return (
        <ConfigProvider theme = {theme}>
            <Button type="primary" size="large" onClick={() => handleSubmit()}>{name}</Button>
        </ConfigProvider>

    );

}

export default AntButton;

