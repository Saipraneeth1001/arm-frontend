import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, ConfigProvider } from 'antd';

const theme = {
    token: {
        colorBgContainer: '#d21404',
    }
}



const items = [
    {
        label: 'Home',
        key: 'mail',
    },
    {
        label: 'Info',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: 'airops',
        key: 'alipay',
    },
];
const App = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <ConfigProvider>
            <Menu
                theme={{
                    components: {
                        li: {
                            colorPrimary: 'red',
                            algorithm: true
                        }
                    }
                }}
                onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </ConfigProvider>
    );
};
export default App;