import { useQuery } from '@tanstack/react-query';
import { keepPreviousData } from '@tanstack/react-query';
import type {ProductsResponse} from '../../types/product.ts'

let getProducts = async (limit:number = 10 , search: string = "", page:number = 1, category: string = ""): Promise<ProductsResponse> => {
    const skip = (page - 1) * limit;
    let request:string
    if(search){
        request = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
    }else if(category){
        request = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    }else{
        request = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    }
    let res = await fetch(request)
    if(!res.ok) throw new Error("Failed to fetch products list.")
    return res.json()
}

export const useProducts = ( page: number, limit: number, search: string, category: string ) => {
    return useQuery<ProductsResponse>({
        queryKey: ["products", search, limit, page, category],
        queryFn: () => getProducts(limit, search, page, category),
        placeholderData: keepPreviousData,
        staleTime: 600000,
    });
};

let getCategories = async (): Promise<string[]> => {
    let res = await fetch('https://dummyjson.com/products/category-list')
    if(!res.ok) throw new Error("Failed to fetch categories list.")
    return res.json()
}

export const useCategories = () => {
    return useQuery<string[]>({
        queryKey: ["categories"],
        queryFn: () => getCategories(),
        staleTime: 600000,
    });
};

