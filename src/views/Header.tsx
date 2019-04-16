import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Link, AppBar, Toolbar, Avatar, createStyles, WithStyles } from "@material-ui/core";

import { HEADER_MENU_LINKS } from "../assets/store";

/**
 * CSS Syles for Header.
 */
const styles = theme => createStyles({
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

interface IHeaderMenuLinks extends WithStyles<typeof styles> {}

/**
 * Renders the list of links contained in RIGHT_LINKS dataset.
 *
 * @param param0
 */
function HeaderMenuLinks(props: IHeaderMenuLinks) {
  let headerMenuLinks = HEADER_MENU_LINKS.map(linkName => (
    <Link
      variant="h6"
      underline="none"
      className={props.classes.rightLink}
      href={"#" + linkName}
    >
      {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
    </Link>
  ));

  return <div> {headerMenuLinks} </div>;
}

/**
 * Contains an App bar with a logo at the left and some links at the right.
 */
function Header(props: IHeaderMenuLinks) {
  return (
    <AppBar position="sticky">
      <Toolbar className={props.classes.toolbar}>
        <Avatar
          src="https://angeligareta.github.io/favicon.ico"
          alt="Ángel Igareta"
        />
        <HeaderMenuLinks classes={props.classes} />
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
