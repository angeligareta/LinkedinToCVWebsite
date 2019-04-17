import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, WithStyles, Button, Avatar, createStyles } from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";
import { IState } from '../redux/store';

/**
 * CSS Syles for Footer.
 */
const styles = theme => createStyles({
  footer: {
    backgroundColor: indigo[500],
    color: theme.palette.common.white,
    padding: `${theme.spacing.unit * 3}px 0`
  },
  footerCopyright: {
    marginTop: 15,
    color: theme.palette.common.white
  },
  socialNetworkButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main
  },
  socialNetworkIcon: {
    width: 18,
    height: 18,
    marginRight: 10
  }
});

function UserSocialNetworks(props: IFooter) {

  let socialNetworks = props.userData.userData.userSocialNetworks.map(socialNetwork => (
    <Grid item>            
      <Button variant="contained" className={props.classes.socialNetworkButton} href={socialNetwork.link}>
        {(socialNetwork.icon !== "") && 
          <Avatar alt={socialNetwork.name} 
                  src={socialNetwork.icon}
                  className={props.classes.socialNetworkIcon}/>}
        {socialNetwork.name}
      </Button>
    </Grid>
  ));

  return (
    <Grid container
      justify="center"
      alignContent="center"
      spacing={16}
    >
      {socialNetworks}
    </Grid>      
  );
}

interface IFooter extends WithStyles<typeof styles> {
  userData: IState["userData"]
}
/**
 * Simple footer with two text boxes inside.
 *
 * @param param0
 */
function Footer(props: IFooter) {
  return (
    <section className={props.classes.footer}>
      <UserSocialNetworks {...props}/>
      <Typography
        variant="subtitle1"
        align="center"
        className={props.classes.footerCopyright}
      >
        Copyright © 2019 {props.userData.userData.userName}
      </Typography>
    </section>
  );
}

export default withStyles(styles)(Footer);
