import {Radio, ConfigProvider } from 'antd';

function Pass() {
    return (
        <ConfigProvider>
            <Radio.Button value="a" className="radio-pass">Pass</Radio.Button>
        </ConfigProvider>
    )
}

export default Pass;