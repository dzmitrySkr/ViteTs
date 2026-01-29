
import { create } from "zustand";


type PaginationState = {
    limit: number;
    page: number;
    search: string;
    category: string;

    setLimit: (limit: number) => void;
    setPage: (page: number) => void;
    setSearch: (search: string) => void;
    setCategory: (category: string) => void;
};


export const usePaginationStore = create<PaginationState>((set) => ({
    limit: 10,
    page: 1,
    search: "",
    category: "",

    setLimit: (limit) => set({ limit }),
    setPage: (page) => set({ page }),
    setSearch: (search) => {
        set({category: "" });
        set({search});
    },
    setCategory: (category) => {
        set({search: ""});
        set({category});
    },

}));