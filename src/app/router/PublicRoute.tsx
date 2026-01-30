import { Navigate } from "@tanstack/react-router";
// @ts-ignore
import {useAuthStore} from "@/shared/AuthStore.tsx";
import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
    let {user} = useAuthStore();
    if (user) {
        return <Navigate to="/products" replace />;
    }

    return <>{children}</>;
};