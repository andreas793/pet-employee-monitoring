import {Layout} from "../../components/layout";
import {Row} from "antd";
import {EmployeeForm} from "../../components/employee-form";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice.ts";
import {useAddEmployeeMutation} from "../../services/employees.ts";
import {Paths} from "../../paths.ts";
import type {Employee} from "@prisma/client";
import {isErrorWithMessage} from "../../utils/is-error-with-message.ts";


export const AddEmployee = () => {

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [addEmployee] = useAddEmployeeMutation();

    useEffect(() => {
        if (!user) navigate(Paths.login);
    }, [navigate, user]);

    const handleAddEmployee = async (data: Employee) => {
        try {
            await addEmployee(data).unwrap();
            navigate(`${Paths.status}/created`);
        } catch (error){
            const maybeError = isErrorWithMessage(error);
            if (maybeError) {
                setError(error.data.message);
            } else {
                setError("Неизвестная ошибка");
            }
        }
    }

    return (
        <Layout>
            <Row align="middle" justify="center">
                <EmployeeForm
                    title="Добавить сотрудника"
                    btnText="Добавить"
                    onFinish={handleAddEmployee}
                    error={error}
                />
            </Row>
        </Layout>
    )
}