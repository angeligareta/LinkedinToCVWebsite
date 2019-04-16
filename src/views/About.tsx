import * as React from 'react';
import { Grid, Typography, withStyles, createStyles } from "@material-ui/core";

import SectionLayout from "../components/SectionLayout";

import Introduction from "./Introduction";
import Skills from "./Skills";
import Education from "./Education";
import Qualifications from "./Qualifications";
import Experience from "./Experience";

/**
 * CSS Syles for Portfolio.
 */
const styles = theme => createStyles({
  about: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 8}px`,
    textAlign: "justify"
  }
});

/**
 * Main component that renders a grid container with two text blocks at the left
 * and a subcomponent skills at the right.
 *
 * @param param0
 */
function About({ classes, introduction, qualification, education, experience }) {
  return (
    <SectionLayout
      sectionId="about"
      sectionTitle="ABOUT"
      sectionSubtitle="Let me introduce myself"
      style="primary"
    >
      <Introduction introduction={introduction} />
      <Qualifications qualification={qualification} />
      <Education education={education}/>
      <Experience experience={experience}/>
    </SectionLayout>
  );
}

export default withStyles(styles)(About);
