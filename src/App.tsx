import { RouterProvider } from "@tanstack/react-router";
import {router} from "./app/router/Routes.tsx"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
function App() {


    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#206581',
            },
            background: {
                default: '#020617',
                paper: '#06113b',
            },
            text: {
                primary: '#bebebe',
                secondary: '#9CA3AF',
            },
        },
    });
    return  <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>


}

export default App;