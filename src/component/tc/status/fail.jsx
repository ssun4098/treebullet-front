import {Radio, ConfigProvider } from 'antd';

function Fail() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Radio: {
                        //buttonColor: "#e63946",
                        colorPrimary: '#b71c1c',
                        colorPrimaryHover: '#d32f2f',
                        colorPrimaryActive: '#c62828'
                    },
                },
            }}
        >
            <Radio.Button value="F">Fail</Radio.Button>
        </ConfigProvider>
    )
}

export default Fail;