import {createTheme} from '@material-ui/core/styles';


export const theme = createTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            WebkitFontSmoothing: 'auto',
            backgroundColor: "black",
            color: "white",
            
          },
        },
      },
    },
    palette: {
        primary: {
          // main: "#00C2CB",
          main: "#198CD8",
        },
        secondary: {
          main: '#ffffff',
        },
      },
  });
