import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { getTestcaseList } from '../../api/ProjectApi';

const { Sider } = Layout;
const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  };

  const TestCaseList = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await getTestcaseList(props.projectId); // 비동기 함수 호출
        const menuItemList = data.map((item) => ({
          key: item['id'],
          label: item['name']
        }))
        setItems(menuItemList);
    };

    fetchData();
    },  [props.projectId])


    return (
        <Sider style={siderStyle}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" items={items} />
        </Sider>
      );
  }

  export default TestCaseList;