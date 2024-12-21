import { Layout, Form, Radio } from 'antd';
import Block from './status/block';
import Fail from './status/fail';
import { useState } from 'react';

function TestResultEditor () {
    const { Footer } = Layout;
    const [status, setStatus] = useState('P');
    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    return (
        <>
            <Footer>
            <Form layout="inline">
              <Radio.Group onChange={handleStatus} defaultValue="a">
                <Radio.Button value="P">Pass</Radio.Button>
                <Block/>
                <Fail />
              </Radio.Group>
            </Form>
          </Footer>
        </>
    )
}

export default TestResultEditor;