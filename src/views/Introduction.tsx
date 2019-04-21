import * as React from 'react';
import { Avatar, Grid, Typography, withStyles, createStyles, WithStyles, CircularProgress } from "@material-ui/core";

import SubSectionLayout from "../components/SubSectionLayout";
import { IState } from '../redux/store';


/**
 * CSS Syles for Introduction.
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


/**
 * Data Structure for the props used in Introduction component.
 */
interface IIntroduction extends WithStyles<typeof styles> {
  introduction: IState["introduction"],
  userData: IState["userData"]
}


/**
 * Render a simple avatar image fetched from the LinkedIn user profile.
 * 
 * @param props 
 */
function UserAvatar(props: IIntroduction) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {(props.userData.isLoading)
      ?
        <CircularProgress size={68}/> 
      :
        (props.userData.errMess)
        ?
          <Typography variant="h4" color="error">{props.userData.errMess}</Typography>
        :
          <Avatar
            alt={props.userData.userData.userName}
            src={props.userData.userData.avatarImage}
            className={props.classes.avatar}
          />
      }
    </Grid>
  );
}


/**
 * Render a list of paragraphs representing a brief summary of the user.
 * 
 * @param props 
 */
function UserIntroduction(props: IIntroduction) {
  let introText = props.introduction.introduction.map((introParagraph) => (
    <Typography className={props.classes.introText}variant="body1">{introParagraph}</Typography>
  ));

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {(props.introduction.isLoading)
      ?
        <CircularProgress size={68}/> 
      :
        (props.introduction.errMess)
        ?
          <Typography variant="h4" color="error">{props.introduction.errMess}</Typography>
        :
          <div>{introText}</div>
      }
    </Grid>
  );
}


/**
 * Displays a user avatar at the left and several introduction paragraphs at the right.
 *
 * @param param0
 */
function Introduction(props: IIntroduction) {
  return (
    <SubSectionLayout>
      <UserAvatar {...props} />
      <UserIntroduction {...props} />
    </SubSectionLayout>      
  );
}

export default withStyles(styles)(Introduction);
