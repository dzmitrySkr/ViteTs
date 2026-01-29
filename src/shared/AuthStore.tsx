
import { create } from "zustand";

type LoginPayload = {
    login: string;
    password: string;
};

type AuthState = {
    user:  string | null;
    login: (data: LoginPayload) => void;
    logout: () => void;
};

let userFormLS = localStorage.getItem("MyShopUser") || null

export const useAuthStore = create<AuthState>((set) => ({
    user: userFormLS,
    login: ({ login, password }) => {
        if (login && password) {
            set({user: login,})
            localStorage.setItem("MyShopUser", login);
        }
    },
    logout: () => {
        set({user: null,})
        localStorage.removeItem("MyShopUser");
    },
}));