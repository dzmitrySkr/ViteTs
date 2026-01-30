import { Button, Stack, Typography, TextField } from "@mui/material";
import {useState} from "react";
import {redirect} from "@tanstack/react-router";
import {useAuthStore} from "../../shared/AuthStore.tsx";

export const LoginPage = () => {
    let [name, setName] = useState<string>("")
    let [password, setPassword] = useState<string>("")
    let {login} = useAuthStore()


    const handleLogin = (): void => {
        if(name && password){
            login({login:name, password:password})
            throw redirect({ to: "/products" });
        }
    };


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