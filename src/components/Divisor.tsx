import * as React from 'react';
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";

/**
 * CSS Syles for Divisor.
 */
const styles = theme => createStyles({
  lineDivision: {
    marginTop: "45px",
    marginBottom: "25px",
    width: "27%",
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  }
});

interface IDivisor extends WithStyles<typeof styles> {}

/**
 * Simple HTML hr divisor customized with CSS.
 * @param param0
 */
function Divisor(props: IDivisor) {
  return <hr className={props.classes.lineDivision} />;
}

export default withStyles(styles)(Divisor);
