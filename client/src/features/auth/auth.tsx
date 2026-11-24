import type {JSX} from "react";
import {useCurrentQuery} from "../../services/auth.ts";

export const Auth = ({children}: {children: JSX.Element}) => {
    const { isLoading } = useCurrentQuery();

    if (isLoading) return <span>Загрузка</span>

    return children;
}