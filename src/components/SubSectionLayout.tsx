import * as React from 'react';
import { Grid, withStyles, createStyles, Typography, WithStyles } from "@material-ui/core";

/**
 * CSS Syles for Divisor.
 */
const styles = theme => createStyles({
  subSection: {
    padding: `${theme.spacing.unit * 4}px`,
    textAlign: "justify"
  },
  subSectionTitle: {
    marginBottom: `${theme.spacing.unit * 4}px`
  }
});

function DoubleChildrenSubSection(props: ISubSectionLayout) {
  return (
    <div className={props.classes.subSection}>
      <Typography
        className={props.classes.subSectionTitle}
        variant="h5"
        align="center"
      >
        {props.title}
      </Typography>
      <Grid
        container
        spacing={8}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item md={1} />
        <Grid item md={4}>
          {props.children[0]}
        </Grid>
        <Grid item md={4}>
          {props.children[1]}
        </Grid>

        <Grid item md={1} />
      </Grid>
    </div>
  );
}

function SingleChildrenSubSection(props: ISubSectionLayout) {
  return (
    <div className={props.classes.subSection}>
      <Typography
        className={props.classes.subSectionTitle}
        variant="h4"
        align="center"
      >
        {props.title}
      </Typography>
      <Grid container spacing={16} justify="center">
        <Grid item md={8} sm={10} xs={12}>
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
}

interface ISubSectionLayout extends WithStyles<typeof styles> {
  children: React.ReactChild | React.ReactElement[],
  title?: string
}

/**
 * Common layout for all sections. It renders a title, subtitle and optionally a section description.
 * Besides, it has different themes that the user can choose with styles attribute.
 * @param param0
 */
function SubSectionLayout(props: ISubSectionLayout) {
  let numberOfChildren = Object.keys(props.children).length;

  if (Array.isArray(props.children)) {
    if (numberOfChildren == 2) {
      // Two children
      return DoubleChildrenSubSection(props);
    } else {
      console.log(
        "Subsection Layout admits maximum two children, your subsection has: " +
          numberOfChildren
      );
      return <div />;
    }
  } else {
    return SingleChildrenSubSection(props);
  }
}

export default withStyles(styles)(SubSectionLayout);
