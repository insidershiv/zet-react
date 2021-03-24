import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#023c56',
    },
    secondary: {
      main: '#008080',
    },
  },

});


theme = responsiveFontSizes(theme);

export default theme;