import {useQuery} from "@tanstack/react-query";

export const getMe = async () => {

    const token = localStorage.getItem('token')

    const res = await fetch('https://dummyjson.com/auth/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    if (!res.ok) {
        throw new Error('Unauthorized')
    }
    return res.json()
}

export const useMe = () => {

    return useQuery({
        queryKey: ['me'],
        queryFn: getMe,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        retry: false,
    })
}