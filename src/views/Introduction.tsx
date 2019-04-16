import * as React from 'react';
import { Avatar, Grid, Typography, withStyles } from "@material-ui/core";

import { USER_DATA } from "../assets/store";

import SubSectionLayout from "../components/SubSectionLayout";

/**
 * CSS Syles for Portfolio.
 */
const styles = theme => ({
  avatar: {
    margin: 10,
    width: 250,
    height: 250,
    boxShadow: "0px 0px 15px -2px"
  }
});

/**
 * Main component that renders a grid container with two text blocks at the left
 * and a subcomponent skills at the right.
 *
 * @param param0
 */
function Introduction({ classes, introduction }) {
  console.log(introduction);

  let introText = introduction.introduction.map((introParagraph) => (
      <Typography variant="body1">{introParagraph}</Typography>
  ));

  return (
    <SubSectionLayout>
      <Avatar
        alt={USER_DATA.userName}
        src={USER_DATA.avatarImage}
        className={classes.avatar}
      />
      <div>{introText}</div>
    </SubSectionLayout>
  );
}

export default withStyles(styles)(Introduction);
