import {Form, Input as InputAnt} from 'antd';

type Props = {
    name: string;
    placeholder: string;
    type?:  string;
    size?: "small" | "medium" | "middle" | "large" | undefined;
};

export const Input = ({name, placeholder, type = "text", size = "large"}: Props) => {
    return (
        <Form.Item
            name={name}
            rules={[{required: true, message: "Обязательное поле"}]}
            shouldUpdate>
            <InputAnt
                placeholder={placeholder}
                type={type}
                size={size}
            />
        </Form.Item>
    )
}

