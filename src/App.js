import React, { useState } from 'react';
import { ConfigProvider, Layout, Space } from 'antd';
import Form from './arm-ui/AntForm';
import Navbar from './components/Navbar';

const { Header, Content, Footer } = Layout; 

const App = () => {
  const [taxableIncome, setTaxableIncome] = useState("");

  const headerStyles = {

    background: 'white'
  }

  
  return (
  
    <ConfigProvider >
    <Layout >
      <Header style={headerStyles}>
        <Navbar />
      </Header>
      <Content>
        <Form />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    </ConfigProvider>
    
  );

}

export default App;