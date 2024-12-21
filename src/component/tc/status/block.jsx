import {Radio, ConfigProvider } from 'antd';

function Block() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Radio: {
                        colorPrimary: '#d4a017',
                        colorPrimaryHover: '#ffaf00',
                        colorPrimaryActive: '#e5a100'
                    },
                },
            }}
        >
            <Radio.Button value="B">Block</Radio.Button>
        </ConfigProvider>
    )
}

export default Block;