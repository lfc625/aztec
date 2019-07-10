import * as React from 'react'
import './style.less'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class IndexPage extends React.Component {
    state = {
        count: 5,
        nav: ['人员', '组织', '公司'],
        subMenu: [
            {
                icon: 'user',
                name: '用户',
                children: ['用户列表1', '用户列表2', '用户列表3', '用户列表4']
            },
            {
                icon: 'laptop',
                name: '固定设备',
                children: ['设备列表1', '设备列表2', '设备列表3', '设备列表4']
            },
            {
                icon: 'notification',
                name: '消息',
                children: ['消息列表1', '消息列表2', '消息列表3', '消息列表4']
            }
        ]
    }

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        {this.state.nav.map(item => <Menu.Item key={item.toString()}>{item}</Menu.Item>)}
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{height: '100%', borderRight: 0}}>
                            {
                                this.state.subMenu.map(item => {
                                    const {children} = item
                                    const Menus = children.map(item => <Menu.Item key={item.toString()}>{item}</Menu.Item>)
                                    return (<SubMenu key={item.name} title={<span><Icon type={item.icon}/>{item.name}</span>}>
                                        {Menus}
                                    </SubMenu>)
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default IndexPage