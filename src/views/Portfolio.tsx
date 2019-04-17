import React from 'react';
import { Grid, createStyles, Typography, ButtonBase, withStyles, WithStyles, CircularProgress } from "@material-ui/core";
import SectionLayout from "../components/SectionLayout";
import { IState } from '../redux/store';

/**
 * Structure of a project contained in LATEST_PROJECTS variable.
 */
export interface IProject {
  url: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

/**
 * CSS Syles for Portfolio.
 */
const styles = theme => createStyles({
  root: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    paddingTop: "56.25%",
    width: "85%",
    margin: "auto",
    marginTop: "10vh",
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.1
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor"
    }
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    backgroundColor: theme.palette.secondary.main
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.35,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

interface IPortfolio extends WithStyles<typeof styles> {
  portfolio: IState["portfolio"]
}

/**
 * Component that renders all the Latest projects of the portfolio,
 * each one represented as a button in the Grid container.
 *
 * It gets all the data for the buttons from LATEST_PROJECTS dataset.
 *
 * @param props
 */
function ProjectsView(props: IPortfolio) {
  const latestProjects = props.portfolio.portfolio.map((latestProject: IProject) => (
    <Grid item lg={5} md={5} sm={8} xs={10}>
      <ButtonBase
        focusRipple
        key={latestProject.title}
        className={props.classes.imageWrapper}
      >
        <span
          className={props.classes.imageSrc}
          style={{
            backgroundImage: `url(${latestProject.imageSrc})`
          }}
        />
        <span className={props.classes.imageBackdrop} />
        <span className={props.classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={props.classes.imageTitle}
          >
            {latestProject.title}
            <span className={props.classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </Grid>
  ));

  return (
    <Grid
      container
      className={props.classes.root}
      alignItems="center"
      justify="center"
    >
      {latestProjects}
    </Grid>
  );
}

/**
 * Main component that represents the portfolio block, containing a title,
 * subtitle and description, followed by the latest projects of the career.
 *
 * @param param0
 */
function Portfolio(props: IPortfolio) {
  return (
    <SectionLayout
      sectionId="works"
      sectionTitle="PORTFOLIO"
      sectionSubtitle="See My Latest Projects."
      sectionDesc="Here you can find some of my latest projects, the ones that I feel
            more proud of, developed using different programming languages and
            state-of-art tools. If you click on them you can find the linked
            Github repository."
      style="secondary"
    >
    {(props.portfolio.isLoading) 
      ? 
        <CircularProgress size={68}/> 
      : 
        (props.portfolio.errMess)
        ? 
          <Typography variant="h4" color="error">{props.portfolio.errMess}</Typography>
        :
        <ProjectsView {...props} />
    }      
    </SectionLayout>
  );
}

export default withStyles(styles)(Portfolio);
