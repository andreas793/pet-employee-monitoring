import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {Input} from "../../components/ui/input";
import {PasswordInput} from "../../components/ui/password-input";
import {Button} from "../../components/ui/button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths.ts";

export const Register = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Зарегистрируйтесь" style={{ width: "30rem" }}>
                    <Form onFinish={(e) => e.preventDefault()}>
                        <Input name={"Имя"} placeholder={"Имя"} />
                        <Input type={"email"} name={"email"} placeholder={"Email"} />
                        <PasswordInput name={"password"} placeholder={"Пароль"} />
                        <PasswordInput name={"confirmPassword"} placeholder={"Повторите пароль"} />
                        <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
                    </Form>
                    <Space orientation="vertical" size={"large"}>
                        <Typography.Text>
                            Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}