import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";

import { USER_DATA } from "../assets/store";

/**
 * CSS Syles for Footer.
 */
const styles = theme => ({
  footer: {
    backgroundColor: indigo[500],
    color: theme.palette.common.white,
    padding: `${theme.spacing.unit * 3}px 0`
  },
  footerTitle: {
    color: theme.palette.common.white
  },
  footerSubTitle: {
    color: theme.palette.common.white
  }
});

/**
 * Simple footer with two text boxes inside.
 *
 * @param param0
 */
function AppFooter({ classes }) {
  return (
    <section className={classes.footer}>
      <Typography
        variant="h6"
        align="center"
        className={classes.footerTitle}
        gutterBottom
      >
        SOCIAL NETWORKS
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.footerSubtitle}
      >
        Copyright © 2019 {USER_DATA.userName}
      </Typography>
    </section>
  );
}

export default withStyles(styles)(AppFooter);
