import React from 'react';
import { Layout, theme } from 'antd';
import TestCaseList from './component/tc/list';

const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <>
      <Layout hasSider>
        <TestCaseList projectId="1" />
      <Layout
        style={{
          marginInlineStart: 200,
          height: '100vh'
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial'
          }}
        >
          <object data="http://localhost:8080" ></object>
        </Content>
        <Footer>
          
        </Footer>
      </Layout>
      </Layout>
    </>
  )
}

export default App
