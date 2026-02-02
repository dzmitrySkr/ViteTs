import { Button, Stack, Typography, TextField } from "@mui/material";
import {useState} from "react";
import {useRouter} from "@tanstack/react-router";
import {useLogin} from "../login/api.tsx"



export const LoginPage = () => {
    let [name, setName] = useState<string>("emilys")
    let [password, setPassword] = useState<string>("emilyspass")
    let { mutate } = useLogin()
    const router = useRouter()

    const handleLogin = (): void => {
        mutate ({name, password} ,
            {onSuccess: ():Promise<void> => router.navigate({ to: '/products' })}
        )
}

    return (
        <Stack spacing={2} alignItems="center" mt={10}>
            <Typography variant="h4">Login</Typography>
            <TextField
                label="Name"
                variant="outlined"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <TextField
                label="Password"
                variant="outlined"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained"
                    onClick={()=>handleLogin()}
                >
                Log in
            </Button>

        </Stack>
    );
};