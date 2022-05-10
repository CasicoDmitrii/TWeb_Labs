import { Layout, Menu, Breadcrumb, Card } from 'antd';
import { CustomForm } from './components/CustomForm';
import { IUser } from './components/interfaces';

const { Header, Content } = Layout;

const tabs: Array<String> = ['Main',];

export const HeaderLayout = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu
                mode="horizontal"
                theme="dark"
                defaultSelectedKeys={['0']}
                style={{ justifyContent: 'center' }}
            >
                {tabs.map((tab, index) => (
                    <Menu.Item key={index}>{tab}</Menu.Item>
                ))}
            </Menu>
        </Header>
    );
};

let user: IUser = {
    id: '1',
    nickname: '',
    password: '',
    email: '',
    phone: '',
    comment: '',
    gender: '',
    adress: ''
};

export const MainLayout = () => {
    console.log(user);
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Card bordered={false}>
                <CustomForm />
            </Card>
        </Content>
    );
};