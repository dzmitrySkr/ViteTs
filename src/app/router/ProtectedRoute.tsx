import { Navigate } from "@tanstack/react-router";
// @ts-ignore
import type {ReactNode} from "react";
import {useMe} from "./api.tsx";

interface Props {
    children: ReactNode;
}


export const ProtectedRoute = ({ children }: Props) => {
    const { data: user, isLoading, error } = useMe()
    if (isLoading) return null
    if (!user && error) return <Navigate to="/login" />
    return children
};