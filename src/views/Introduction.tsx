import * as React from 'react';
import { Avatar, Grid, Typography, withStyles, createStyles, WithStyles, CircularProgress } from "@material-ui/core";

import { USER_DATA } from "../assets/store"; // TODO: Change

import SubSectionLayout from "../components/SubSectionLayout";
import { IState } from '../redux/store';

/**
 * CSS Syles for Portfolio.
 */
const styles = theme => createStyles({
  avatar: {
    marginLeft: 30,
    width: 220,
    height: 220,
    boxShadow: "0px 0px 15px -2px"
  },
  introText: {
    paddingBottom: "10px"
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
      <Typography className={props.classes.introText}variant="body1">{introParagraph}</Typography>
  ));

  return (
    (props.introduction.isLoading)
    ?
      <CircularProgress size={68}/> 
    :
      (props.introduction.errMess)
      ?
        <Typography variant="h4" color="error">{props.introduction.errMess}</Typography>
      :
      <SubSectionLayout>
        <Avatar
          alt={USER_DATA.userName}
          src={USER_DATA.avatarImage}
          className={props.classes.avatar}
        />
        <Grid container direction="column" justify="center" alignItems="center">      
          {introText}
        </Grid>
      </SubSectionLayout>
  );
}

export default withStyles(styles)(Introduction);
