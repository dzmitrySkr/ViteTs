import {
    createRootRoute,
    createRoute,
    createRouter, Navigate,
    redirect
} from "@tanstack/react-router";

import { LoginPage } from "../../pages/login/LoginPage.tsx";
import { ProductsList} from "../../pages/productsList/ProductListPage.tsx";
import { ProductPage } from "../../pages/product/ProductPage.tsx";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuthStore } from "../../shared/AuthStore.tsx";
import {PublicRoute} from "./PublicRoute.tsx";
import {RootLayout} from "../../pages/RootLayout.tsx";



const rootRoute = createRootRoute({
    notFoundComponent:()=> <Navigate to="/products" replace />,
    component: ()=><RootLayout></RootLayout>
});

const indexRoute = createRoute({getParentRoute: () => rootRoute,
    path: "/",
    beforeLoad: () => {
        let {user} = useAuthStore.getState();
        if (user) throw redirect({ to: "/products" });
        throw redirect({ to: "/login" });
    },})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: ()=>(
        <PublicRoute>
            <LoginPage />
        </PublicRoute>
    ),
});

export const productsListRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/products",
    component: () => (
        <ProtectedRoute>
            <ProductsList />
        </ProtectedRoute>
    ),
});

export const productRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/product/$productId",
    component:()=>
        <ProtectedRoute>
            <ProductPage/>
        </ProtectedRoute>
});

const catchAllRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "*",
    beforeLoad: () => {
        throw redirect({ to: "/products" });
    },
});


const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    productsListRoute,
    productRoute,
    catchAllRoute
]);

export const router = createRouter({ routeTree });
