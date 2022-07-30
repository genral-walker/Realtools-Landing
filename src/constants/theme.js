import { createTheme } from "@mui/material";


const THEME = createTheme({
    palette: {
        common: {
           black: '#000103' 
        },
        primary: {
            main: '#1849C6',
        },
        secondary: {
            main: '#FFCE31'
        },
        text : {
            primary: '#2F2F2F',
            secondary: '#021850'
        }
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        secondary: {
            fontFamily: ['Roboto', 'sans-serif'].join(',')
        }
    }
});

export default THEME