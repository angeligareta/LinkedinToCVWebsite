import { createMuiTheme } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";

/**
 * Main theme used in the project. It can be customized to change the colors
 * used by default in the application.
 */
const Theme = createMuiTheme({
  palette: {
    secondary: {
      main: lightBlue[500]
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Lato"'
  }
});

export default Theme;
