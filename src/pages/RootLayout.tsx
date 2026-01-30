import { Outlet } from "@tanstack/react-router";
import {AppBar, Toolbar, Typography, Button, Stack} from "@mui/material";
import { useAuthStore } from "../shared/AuthStore.tsx";

export const RootLayout = () => {

    let {user, logout} = useAuthStore();

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
                            px: 3, // только внутренний паддинг
                        }}
                    >
                        {/* ЛОГО / НАЗВАНИЕ */}
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

                        {/* ПОЛЬЗОВАТЕЛЬ */}
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

                        {/* КНОПКА */}
                        {user ? (
                            <Button
                                onClick={logout}
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