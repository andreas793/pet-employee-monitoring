import {Button as ButtonAnt, Form} from 'antd'
import type {ReactNode} from "react";

type Props = {
    children?: ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean | undefined;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | "square" | undefined;
    icon?: ReactNode;
};

export const Button = ({
                           children,
                           htmlType = 'button',
                           onClick,
                           type,
                           danger,
                           loading,
                           shape,
                           icon,
                       }: Props) => {
    return (
        <Form.Item>
            <ButtonAnt
                htmlType={htmlType}
                type={type}
                onClick={onClick}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
            >
                {children}
            </ButtonAnt>
        </Form.Item>
    )
}