import { useQuery } from '@tanstack/react-query';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    images: string[];
}

let getProduct = async (id: string): Promise<Product> => {
    let res = await fetch(`https://dummyjson.com/products/${id}`)
    if(!res.ok) throw new Error("Failed to fetch products list.")
    return res.json()
}

export const useProduct = (id: string) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id),
        keepPreviousData: true, // сохраняет старые данные при смене страницы
    });
};