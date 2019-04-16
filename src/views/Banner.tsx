import * as React from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, Fade, Grow, createStyles } from "@material-ui/core";
import { ABOUT_SECTION_TAG, PROJECT_SECTION_TAG } from "../assets/store";

import { USER_DATA } from "../assets/store";
const { backgroundImage, userName, userPosition } = USER_DATA;

/**
 * CSS styles for Banner
 *
 * @param theme
 */
const styles = theme => createStyles({
  banner: {
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
    backgroundSize: "cover",
    minSize: "100%",
    padding: `${theme.spacing.unit * 15}px 0`,
    backgroundImage: `url(${backgroundImage})`
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
 * Contains two titles at the left and two buttons at the right,
 * all organized with Grid containers.
 *
 * @param props
 */
function Banner({ classes }) {
  return (
    <section
      id="banner"
      className={classNames(classes.banner, classes.backdrop)}
    >
      <Grid container justify="flex-start" alignItems="flex-start">
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Grid container direction="column" justify="center">
            <Grid item xs={10}>
              <Fade in timeout={2000}>
                <Typography
                  color="inherit"
                  variant="h2"
                  className={classes.bannerTitle}
                >
                  I am {userName}.
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={10}>
              <Fade in timeout={4000}>
                <Typography
                  color="inherit"
                  variant="h2"
                  className={classes.bannerSubTitle}
                >
                  I am a {userPosition}.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.buttons} xs>
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
                className={classes.button}
                href={"#" + PROJECT_SECTION_TAG}
              >
                LATEST PROJECTS
              </Button>
            </Grow>
            <Grow in timeout={3000}>
              <Button
                variant="outlined"
                color="inherit"
                className={classes.button}
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
