import * as React from 'react';
import { Avatar, Grid, Typography, withStyles, createStyles, WithStyles } from "@material-ui/core";

import { USER_DATA } from "../assets/store"; // TODO: Change

import SubSectionLayout from "../components/SubSectionLayout";
import { IState } from '../redux/store';

/**
 * CSS Syles for Portfolio.
 */
const styles = theme => createStyles({
  avatar: {
    margin: 10,
    width: 250,
    height: 250,
    boxShadow: "0px 0px 15px -2px"
  }
});

interface IIntroduction extends WithStyles<typeof styles> {
  introduction: IState["introduction"]
}

/**
 * Main component that renders a grid container with two text blocks at the left
 * and a subcomponent skills at the right.
 *
 * @param param0
 */
function Introduction(props: IIntroduction) {
  let introText = props.introduction.introduction.map((introParagraph) => (
      <Typography variant="body1">{introParagraph}</Typography>
  ));

  return (
    <SubSectionLayout>
      <Avatar
        alt={USER_DATA.userName}
        src={USER_DATA.avatarImage}
        className={props.classes.avatar}
      />
      <div>{introText}</div>
    </SubSectionLayout>
  );
}

export default withStyles(styles)(Introduction);
