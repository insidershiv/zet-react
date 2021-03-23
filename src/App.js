import logo from './logo.svg';
import './App.css';
import Home from './screens/home/home';
import theme from './theme/theme';
import { ThemeProvider, Typography } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';

function App() {
    return (
        <ThemeProvider theme={theme}>

            <BrowserRouter>

                <Header />

            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;