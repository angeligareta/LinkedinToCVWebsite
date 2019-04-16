import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";

/**
 * CSS Syles for Divisor.
 */
const styles = theme => ({
  lineDivision: {
    marginTop: "45px",
    marginBottom: "35px",
    width: "27%",
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  }
});

/**
 * Simple HTML hr divisor customized with CSS.
 * @param param0
 */
function Divisor({ classes }) {
  return <hr className={classes.lineDivision} />;
}

export default withStyles(styles)(Divisor);
