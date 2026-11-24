import {Card, Form, Space} from "antd";
import {Input} from "../ui/input";
import type {Employee} from "@prisma/client";
import {ErrorMessage} from "../error-message";
import {Button} from "../ui/button";

type Props<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error?: string | undefined;
    employee?: T;
}

export const EmployeeForm = ({
                                 onFinish,
                                 btnText,
                                 error,
                                 employee,
                                 title,
                             }: Props<Employee>) => {
    return (
        <Card title={title} style={{width: '30rem'}}>
            <Form name='emloyee form' onFinish={onFinish} initialValues={employee}>
                <Input type='text' name='firstName' placeholder={'Имя'} />
                <Input type='text' name='lastName' placeholder={'Фамилия'} />
                <Input type='text' name='age' placeholder={'Возраст'} />
                <Input type='text' name='address' placeholder={'Адрес'} />
                <Space>
                    <ErrorMessage message={error} />
                    <Button htmlType="submit">{btnText}</Button>
                </Space>
            </Form>
        </Card>
    )
}