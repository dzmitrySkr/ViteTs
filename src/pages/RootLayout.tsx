import { Outlet } from "@tanstack/react-router";
import {AppBar, Toolbar, Typography, Button, Stack} from "@mui/material";
import {useRouter} from "@tanstack/react-router";
import {useEffect, useState} from "react";
import { useQueryClient } from '@tanstack/react-query'
import { useMatch } from "@tanstack/react-router";
import {productsListRoute} from "../app/router/Routes.tsx";

export const RootLayout = () => {

    // @ts-ignore
    const match = useMatch(productsListRoute);
    let queryClient =  useQueryClient()
    const router = useRouter()
    const [user, setUser] = useState<string | null>(null)

    useEffect(() => {

        const data = localStorage.getItem("userData")
        if (data) {
            const parsed = JSON.parse(data)
            setUser(`${parsed.firstName} ${parsed.lastName}`)
        }
    }, [match])

    const logout = () => {
        queryClient.removeQueries({ queryKey: ['me'] })
        localStorage.removeItem("userData")
        localStorage.removeItem("token")
        setUser(null)
        router.navigate({ to: '/login' })
    }
    return (
        <>
            <Stack >
                <AppBar
                    position="sticky"
                    elevation={0}
                    sx={{
                        backgroundColor: '#020617',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}
                >
                    <Toolbar
                        sx={{
                            minHeight: 64,
                            px: 3,
                        }}
                    >

                        <Typography
                            variant="h6"
                            sx={{
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: 'primary.main',
                            }}
                        >
                            My Shop
                        </Typography>


                        {user && (
                            <Typography
                                variant="body2"
                                sx={{
                                    mr: 2,
                                    color: 'text.secondary',
                                }}
                            >
                                {user}
                            </Typography>
                        )}

                        {user ? (
                            <Button
                                onClick={()=>logout()}
                                sx={{
                                    color: '#E5E7EB',
                                    textTransform: 'none',
                                    borderRadius: 999,
                                    px: 2.5,
                                    fontSize: 14,
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        backgroundColor: 'rgba(56,189,248,0.1)',
                                    },
                                }}
                            >
                                Logout
                            </Button>
                        ) : (
                            <Button
                                sx={{
                                    color: '#E5E7EB',
                                    textTransform: 'none',
                                    borderRadius: 999,
                                    px: 2.5,
                                }}
                            >
                                Login
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>


                <Stack flexGrow={1}>
                    <main style={{ padding: 16, height: "100%" }}>
                        <Outlet />
                    </main>
                </Stack>

            </Stack>
        </>
    );
};