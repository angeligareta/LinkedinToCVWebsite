import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Link, AppBar, Toolbar, Avatar } from "@material-ui/core";

import { HEADER_MENU_LINKS } from "../assets/store";

/**
 * CSS Syles for Header.
 */
const styles = theme => ({
  toolbar: {
    justifyContent: "space-between"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 3
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

/**
 * Renders the list of links contained in RIGHT_LINKS dataset.
 *
 * @param param0
 */
function HeaderMenuLinks({ classes }) {
  let headerMenuLinks = HEADER_MENU_LINKS.map(linkName => (
    <Link
      variant="h6"
      underline="none"
      className={classes.rightLink}
      href={"#" + linkName}
    >
      {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
    </Link>
  ));

  return <div className={classes.right}> {headerMenuLinks} </div>;
}

/**
 * Contains an App bar with a logo at the left and some links at the right.
 */
function Header({ classes }) {
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Avatar
          src="https://angeligareta.github.io/favicon.ico"
          alt="Ángel Igareta"
        />
        <HeaderMenuLinks classes={classes} />
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
