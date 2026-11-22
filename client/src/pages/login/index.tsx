import {Card, Form, Row, Space, Typography} from "antd";
import {Layout} from "../../components/layout";
import {PasswordInput} from "../../components/ui/password-input";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths.ts";

export const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войти" style={{ width: "30rem" }}>
                    <Form onFinish={(e) => e.preventDefault()}>
                        <Input type={"email"} name={"email"} placeholder={"Email"} />
                        <PasswordInput name={"password"} placeholder={"Пароль"} />
                        <Button type="primary" htmlType="submit" >Войти</Button>
                    </Form>
                    <Space orientation="vertical" size={"large"}>
                        <Typography.Text>
                            Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
