import { Outlet } from "@tanstack/react-router";
import {AppBar, Toolbar, Typography, Button, Stack} from "@mui/material";
import { useAuthStore } from "../shared/AuthStore.tsx";

export const RootLayout = () => {

    let {user, logout} = useAuthStore();

    return (
        <>

            <Stack >
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            My Shop
                        </Typography>

                        {user && (
                            <Typography variant="subtitle1" sx={{ mr: 2 }}>
                                Hello, {user}
                            </Typography>
                        )}

                        {user ? (
                            <Button color="inherit" onClick={logout}>
                                Logout
                            </Button>
                        ) : (
                            <Typography color="inherit">Login</Typography>
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