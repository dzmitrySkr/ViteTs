import type {ReactNode} from "react";
import { Navigate } from "@tanstack/react-router";
import {useMe} from "./api.tsx";

interface Props {
    children: ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
    const { data: user, isLoading, error } = useMe()
    if (isLoading) return null
    if (error) {return children}
    if (user) return <Navigate to="/products" replace />;
    return children;
};