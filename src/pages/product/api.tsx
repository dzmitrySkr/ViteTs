import { useQuery, keepPreviousData  } from '@tanstack/react-query';
import type {Product} from "../../types/product.ts"

let getProduct = async (id: string): Promise<Product> => {
    let res = await fetch(`https://dummyjson.com/products/${id}`)
    if(!res.ok) throw new Error("Failed to fetch products list.")
    return res.json()
}

export const useProduct = (id: string) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id),
        placeholderData: keepPreviousData,
        staleTime: 600000,
    });
};

