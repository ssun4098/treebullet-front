import React from 'react';
import { Layout, Form, Radio, ConfigProvider } from 'antd';
import TestCaseList from './component/tc/list';
import TestResultEditor from './component/tc/result';

const { Header, Content, Footer } = Layout;

function App() {

  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

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
          <Content
            style={{
              margin: '24px 16px 0',
              overflow: 'initial'
            }}
          >
            <object data="http://localhost:8080" ></object>
          </Content>
          <TestResultEditor />
        </Layout>
      </Layout>
    </>
  )
}

export default App
