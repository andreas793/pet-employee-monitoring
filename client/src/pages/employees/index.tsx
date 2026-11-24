import {Layout} from "../../components/layout";
import {Button} from "../../components/ui/button";
import {PlusCircleOutlined} from "@ant-design/icons";
import {Table} from "antd";
import {useGetAllEmployeesQuery} from "../../services/employees.ts";
import type {ColumnsType} from "antd/es/table";
import type {Employee} from "@prisma/client";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../paths.ts";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice.ts";
import {useEffect} from "react";

const columns: ColumnsType<Employee> = [
    {
        title: "Имя",
        dataIndex: "firstName",
        key: "firstName",
    },
    {
        title: "Возраст",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Адрес",
        dataIndex: "address",
        key: "address",
    },
]

export const Employees = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const {data, isLoading} = useGetAllEmployeesQuery();

    const goToAddUser = () => navigate(Paths.employeeAdd)

    useEffect(() => {
        if(!user) navigate(Paths.login);
    },[navigate, user]);

    return (
        <Layout>
            <Button type='primary' onClick={goToAddUser} icon={<PlusCircleOutlined/>}>
                Добавить
            </Button>
            <Table
                loading={isLoading}
                dataSource={data}
                pagination={false}
                columns={columns}
                rowKey={(record) => record.id}
                onRow={(record) => {
                    return {
                        onClick: () => navigate(`${Paths.employee}/${record.id}`),
                    }
                }}
            />
        </Layout>
    )
}