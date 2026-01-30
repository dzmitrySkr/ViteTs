import {usePaginationStore} from "../shared/PaginationStore.tsx";
import {useCategories, useProducts} from "../pages/productsList/api.tsx";
import {useState} from "react";



export let usePagination = () =>{

    let {limit, page, setPage, category, search, setSearch, setCategory, setLimit} = usePaginationStore()

    const {data, isLoading, error } = useProducts(page, limit, search, category);
    const {data: categoriesData } = useCategories();
    const [pageInput, setPageInput] = useState<number>(page);
    const totalPages:number = Math.max(1, Math.ceil((data?.total || 0) / limit));

    let changePage = (value:number):void =>{
        if(value>totalPages) value = totalPages
        if(value<1) value = 1
        setPageInput(value);
        setPage(value)
    }

    let changeCategory = (value:string):void=>{
        if(category === value){
            setCategory("")
        }else{
            setCategory(value)
        }
    }

    let changeSearch = (value:string):void =>{
        setCategory("");
        setSearch(value);
    }


    return {
        changePage,
        changeCategory,
        changeSearch,
        data,
        isLoading,
        error,
        pageInput,
        setPageInput,
        totalPages,
        categoriesData,
        limit,
        page,
        setPage,
        category,
        search,
        setSearch,
        setCategory,
        setLimit
    }
}