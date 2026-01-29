import { RouterProvider } from "@tanstack/react-router";
import {router} from "./app/router/Routes.tsx"
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {



    const theme = createTheme({
        palette: {
            primary: {
                main: '#fd4848', // например, оранжевый
            },
        },
    });

    return  <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>


}

export default App;