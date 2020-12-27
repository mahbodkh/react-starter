import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './TopMenuNav.css';
import {Menu} from 'antd';
import {HomeOutlined, LogoutOutlined, ShopOutlined, ShoppingCartOutlined} from '@ant-design/icons';


const {SubMenu} = Menu;
export default class TopMenuNav extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return (
            <div className="TopMenuNav">
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark" dir="rtl">
                    <Menu.Item key="mail" icon={<HomeOutlined/>}>
                        پیشخوان
                    </Menu.Item>
                    <SubMenu key="SubMenu" icon={<ShopOutlined/>} title="محصولات">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            ناحیه کاربری
                        </a>
                    </Menu.Item>
                    <Menu.Item key="app" disabled icon={<ShoppingCartOutlined/>}>
                        سبد خرید
                    </Menu.Item>
                    <Menu.Item key="app" disabled icon={<LogoutOutlined/>}>
                        خروج
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}