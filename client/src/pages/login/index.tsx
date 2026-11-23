import {Card, Form, Row, Space, Typography} from "antd";
import {Layout} from "../../components/layout";
import {PasswordInput} from "../../components/ui/password-input";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths.ts";
import {useLoginMutation, type UserData} from "../../services/auth.ts";
import {isErrorWithMessage} from "../../utils/is-error-with-message.ts";
import { useState } from "react";
import {ErrorMessage} from "../../components/error-message";

export const Login = () => {

    const navigate = useNavigate();
    const [loginUser, loginUserResult] = useLoginMutation();
    const [error, setError] = useState('');

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap();
            navigate(Paths.home);
        } catch (err) {
            const maybeError = isErrorWithMessage(err);
            if(maybeError){
                setError(err.data.message);
            } else {
                setError('Неизвестная ошибка');
            }
        }
    }

    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войти" style={{width: "30rem"}}>
                    <Form onFinish={login}>
                        <Input type={"email"} name={"email"} placeholder={"Email"}/>
                        <PasswordInput name={"password"} placeholder={"Пароль"}/>
                        <Button type="primary" htmlType="submit">Войти</Button>
                    </Form>
                    <Space orientation="vertical" size={"large"}>
                        <Typography.Text>
                            Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
                        </Typography.Text>
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
