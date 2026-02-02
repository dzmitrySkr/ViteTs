import {useQueryClient, useMutation} from "@tanstack/react-query";

interface LoginInput {
    name: string
    password: string
}


const login = async (username: string, password: string) => {
    const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
            expiresInMins: 60,
        }),
    })
    if (!res.ok) {
        throw new Error('Login failed')
    }

    return res.json()
}


export const useLogin = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ name, password }:LoginInput) =>
            login(name, password),

        onSuccess: (data) => {
            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('userData', JSON.stringify(data) )
            queryClient.setQueryData(['me'], data)
        },
    })
}


