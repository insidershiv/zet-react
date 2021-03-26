import logo from './logo.svg';
import './App.css';
import Home from './screens/home/home';
import theme from './theme/theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';

import { MuiThemeProvider } from '@material-ui/core';

function App() {
    return (
        <MuiThemeProvider theme={theme}>

            <BrowserRouter>
                <Header />
                <Home />
            </BrowserRouter>

        </MuiThemeProvider>
    );
}

export default App;