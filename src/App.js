import logo from './logo.svg';
import './App.css';
import Home from './screens/home/home';
import theme from './theme/theme';
import { ThemeProvider, Typography } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import PrimaryButton from './components/form-elements/theme-buttonround';
import { MuiThemeProvider } from '@material-ui/core';

function App() {
    return (
        <MuiThemeProvider theme={theme}>

            <BrowserRouter>
                <Header />

            </BrowserRouter>

        </MuiThemeProvider>
    );
}

export default App;