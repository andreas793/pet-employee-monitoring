import {Layout, Space, Typography} from "antd";
import styles from './index.module.css';
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Button} from "../ui/button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths.ts";

export const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon}/>
                <Link to={Paths.home}>
                    <Button type={'link'}>
                        <Typography.Title level={1}> Сотрудники </Typography.Title>
                    </Button>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <Button type='primary' icon={<UserOutlined/>}> регистрация </Button>
                </Link>
                <Link to={Paths.login}>
                    <Button type='primary' icon={<LoginOutlined/>}> войти </Button>
                </Link>
            </Space>
        </Layout.Header>);
}