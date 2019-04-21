import * as React from 'react';
import { Typography, Grid, Button, Fade, Grow, createStyles, withStyles, WithStyles } from "@material-ui/core";

import { PROJECT_SECTION_TAG, ABOUT_SECTION_TAG } from '../redux/constants';
import { IState } from '../redux/store';


/**
 * CSS styles for Banner.
 *
 * @param theme
 */
const styles = theme => createStyles({
  banner: {
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
    backgroundSize: "cover",
    minSize: "100%",
    padding: `${theme.spacing.unit * 15}px 0`    
  },
  bannerTitle: {
    WebkitUserSelect: "none",
    color: theme.palette.common.white,
    paddingBottom: theme.spacing.unit * 2
  },
  bannerSubTitle: {
    WebkitUserSelect: "none",
    color: theme.palette.common.white
  },
  buttons: {
    marginTop: "auto",
    marginBottom: "auto"
  },
  button: {
    margin: theme.spacing.unit,
    width: "200px",
    height: "50px",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    },
    color: theme.palette.common.white,
    borderColor: theme.palette.common.black
  }
});


/**
 * Data Structure for the props used in Banner component.
 */
interface IBanner extends WithStyles<typeof styles> {
  userData: IState["userData"]
}


/**
 * Banner of the application. It contains the name and the current position of the user,
 * on top of a background that is fetched from the User LinkedIn.
 *
 * @param props
 */
function Banner(props: IBanner) {
  return (
    <section
      id="banner"
      className={props.classes.banner}
      style={{backgroundImage: `url(${props.userData.userData.backgroundImage})`}}
    >
      <Grid container justify="flex-start" alignItems="flex-start">
        <Grid item xs={1} />
        <Grid item xs={6}>
          {!props.userData.isLoading && // Only if the banner is not loading, show the texts.
            <Grid container direction="column" justify="center">
              <Grid item xs={10}>
                <Fade in timeout={2000}>
                  <Typography
                    color="inherit"
                    variant="h2"
                    className={props.classes.bannerTitle}
                  >
                    I am {(props.userData.errMess) ? "???" : props.userData.userData.userName}.
                  </Typography>
                </Fade>
              </Grid>
              <Grid item xs={10}>
                <Fade in timeout={4000}>
                  <Typography
                    color="inherit"
                    variant="h2"
                    className={props.classes.bannerSubTitle}
                  >
                    I am a {(props.userData.errMess) ? "???" :props.userData.userData.userPosition}.
                  </Typography>
                </Fade>
              </Grid>
            </Grid>
          }
        </Grid>
        <Grid item className={props.classes.buttons} xs>
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            <Grow in timeout={3000}>
              <Button
                variant="outlined"
                color="inherit"
                className={props.classes.button}
                href={"#" + PROJECT_SECTION_TAG}
              >
                LATEST PROJECTS
              </Button>
            </Grow>
            <Grow in timeout={3000}>
              <Button
                variant="outlined"
                color="inherit"
                className={props.classes.button}
                href={"#" + ABOUT_SECTION_TAG}
              >
                MORE ABOUT ME
              </Button>
            </Grow>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}


export default withStyles(styles)(Banner);
