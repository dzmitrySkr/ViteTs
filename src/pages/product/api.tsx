import { useQuery, keepPreviousData  } from '@tanstack/react-query';

type Reviews = {
    "rating": number,
    "comment": string,
    "date": string,
    "reviewerName": string,
    "reviewerEmail": string
}

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    images: string[];
    rating: number;
    category:string;
    brand:string;
    reviews:Reviews[];
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
        placeholderData: keepPreviousData,
    });
};

