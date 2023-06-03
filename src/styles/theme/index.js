import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1600,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: `"Poppins", "sans-serif"`,
    },
    palette: {
        primary: {
            main: '#5E5CE6',
            light: '#5e5ce6',
        },
        secondary: {
            main: '#6C757D',
            light: 'B5B4C4',
        },
        info: {
            main: '#353535',
        },
        warning: { main: '#FF3B30' },
    },
})

export default theme
