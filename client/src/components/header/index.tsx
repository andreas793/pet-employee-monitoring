import { Layout, Space, Typography} from "antd";
import styles from './index.module.css';
import { TeamOutlined } from "@ant-design/icons";
import {Button} from "../ui/button";
import { Link } from "react-router-dom";
import {Paths} from "../../paths.ts";

export const Header = () => {
    return (
        <Layout.Header>
            <Space><TeamOutlined className={styles.teamIcon} /></Space>
            <Space>
                <Link to={Paths.home}>
                    <Button type='primary'>
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </Button>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <Button type='primary'>
                        <Typography.Title level={1}>Регистрация</Typography.Title>
                    </Button>
                </Link>
                <Link to={Paths.login}>
                    <Button type='primary'>
                        <Typography.Title level={1}>Войти</Typography.Title>
                    </Button>
                </Link>
            </Space>
        </Layout.Header>);
}