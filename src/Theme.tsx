import {createTheme} from '@material-ui/core/styles';


export const theme = createTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            WebkitFontSmoothing: 'auto',
            backgroundColor: "black",
            color: "white"
          },
        },
      },
    },
    palette: {
        primary: {
          main: "#00C2CB",
        },
        secondary: {
          main: '#ffffff',
        },
      },
  });
