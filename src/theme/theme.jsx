import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#023c56',
    },
    secondary: {
      main: '#008080',
    },
  },

  typography: {
    fontFamily: 'Raleway, sans-serif',

    subtitle1: {
      fontSize: '1.9rem',
      color: '#a08f86',
      fontWeight: 500,
      lineHeight: 1.2
    },
    overline: {
      lineHeight: 1.2,
    },


  },



});


theme = responsiveFontSizes(theme);

export default theme;