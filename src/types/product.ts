type Reviews = {
    "rating": number,
    "comment": string,
    "date": string,
    "reviewerName": string,
    "reviewerEmail": string
}


export interface Product {
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

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}


export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export type ProductListContentProps = {
    isLoading: boolean;
    data?: ProductsResponse;
};