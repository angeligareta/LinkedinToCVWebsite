import * as React from 'react';
import { Grid, Typography, withStyles, createStyles, WithStyles } from "@material-ui/core";

import SubSectionLayout from "../components/SubSectionLayout";


/**
 * CSS Syles for Skills.
 */
const styles = theme => createStyles({});


/**
 * Data Structure for the props used in Skills component.
 */
interface ISkills extends WithStyles<typeof styles> {}


/**
 * TODO
 *
 * @param props
 */
function Skills(props: ISkills) {
  return (
    <SubSectionLayout>
      <Grid container spacing={40}>
        <Grid item />
        <Grid item>
          <Typography variant="body1">
            I am passionate about new technologies. Therefore, I would like to
            transform the way people think and improve their lives by using Big
            Data, Artificial Intelligence and Machine Learning techniques, among
            others. On top of that I am fond of clean code and time management.
          </Typography>
        </Grid>
      </Grid>
    </SubSectionLayout>
  );
}


export default withStyles(styles)(Skills);
