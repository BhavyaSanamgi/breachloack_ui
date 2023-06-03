import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/theme'
import { Toaster } from 'react-hot-toast'
import { Provider } from "react-redux";
import store from '../store/store';

import AppRoutes from './AppRoutes'

function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <ThemeProvider theme={theme}>
            <Toaster position="top-right" reverseOrder={false} />
                <AppRoutes />
            </ThemeProvider>
        </div>
        </Provider>
    )
}

export default App;
