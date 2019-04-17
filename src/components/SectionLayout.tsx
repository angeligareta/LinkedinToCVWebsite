import React from 'react';
import { Grid, createStyles, WithStyles, Typography, withStyles } from "@material-ui/core";
import { red, lightBlue } from "@material-ui/core/colors";

import Divisor from "../components/Divisor";

/**
 * CSS Syles for Divisor.
 */
const styles = theme => createStyles({
  section: {
    backgroundColor: theme.palette.common.white,
    padding: `${theme.spacing.unit * 8}px 0`,
    align: "center"
  },
  sectionDesc: {
    paddingTop: `${theme.spacing.unit * 4}px`,
    textAlign: "justify",
    fontSize: 20
  },
  sectionTitle: {
    color: red[900]
  },
  sectionSubTitle: {
    fontWeight: "bold",
    padding: "0px 20px",
    textAlign: "center"
  }
});

interface ISectionLayout extends WithStyles<typeof styles>{
  sectionId: string,
  sectionTitle: string,
  sectionSubtitle: string,
  sectionDesc?: string,
  style?: string,
  children: React.ReactElement[] | React.ReactChild
}

/**
 * Common layout for all sections. It renders a title, subtitle and optionally a section description.
 * Besides, it has different themes (default and secondary) that the user can choose with styles attribute.
 * 
 * @param props
 */
function SectionLayout(props: ISectionLayout) {
  let backgroundColor;
  switch (props.style) {
    case "secondary":
      backgroundColor = lightBlue[50];
      break;
  }

  return (
    <section id={props.sectionId}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={props.classes.section}
        style={{ backgroundColor: backgroundColor }}
      >
        <Typography className={props.classes.sectionTitle} variant="h5">
          {props.sectionTitle}
        </Typography>
        <Typography className={props.classes.sectionSubTitle} variant="h3">
          {props.sectionSubtitle}
        </Typography>
        {props.sectionDesc && 
          <Grid item lg={6} md={8} xs={10}>
            <Typography className={props.classes.sectionDesc}>{props.sectionDesc}</Typography>
          </Grid>
        }
        <Divisor />
        {props.children}
      </Grid>
    </section>
  );
}

export default withStyles(styles)(SectionLayout);
