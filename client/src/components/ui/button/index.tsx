import {Button as ButtonAnt, Form} from 'antd'
import type {CSSProperties, ReactNode} from "react";
import styles from './index.module.css';

type Props = {
    children?: ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean | undefined;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | "square" | undefined;
    icon?: ReactNode;
    style?: CSSProperties | undefined;
    className?: string;
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
                           style,
                           className,
                       }: Props) => {
    return (
        <Form.Item className={styles.formItem}>
            <ButtonAnt
                htmlType={htmlType}
                type={type}
                onClick={onClick}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                style={style}
                className={className}
            >
                {children}
            </ButtonAnt>
        </Form.Item>
    )
}