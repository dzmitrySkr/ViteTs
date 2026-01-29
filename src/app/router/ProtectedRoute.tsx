import { Navigate } from "@tanstack/react-router";
import {useAuthStore} from "../../shared/AuthStore.tsx";
import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {

    let {user} = useAuthStore();

    if (!user) {
        return <Navigate to="/login" />;
    }
    
    return <>{children}</>;
};