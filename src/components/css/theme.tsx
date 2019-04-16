import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#1565c0" // Light blue 500
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Lato"'
  }
});

export default theme;
