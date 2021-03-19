import logo from './logo.svg';
import './App.css';
import Home from './screens/home/home';
import theme from './theme/theme';
import { ThemeProvider, Typography } from '@material-ui/core';

function App() {
    return( 
    <ThemeProvider theme={theme}>

        <Typography color="primary">
        Hi there Guys !!
        </Typography>
        </ThemeProvider>
    );
}

export default App;