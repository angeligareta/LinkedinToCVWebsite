import * as React from 'react';
import { withStyles, createStyles, WithStyles } from "@material-ui/core";

import SectionLayout from "../components/SectionLayout";

import Introduction from "./Introduction";
import Skills from "./Skills";
import Education from "./Education";
import Qualifications from "./Qualifications";
import Experience from "./Experience";
import { IState } from '../redux/store';

/**
 * CSS Syles for Portfolio.
 */
const styles = theme => createStyles({
  about: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 8}px`,
    textAlign: "justify"
  }
});

interface IAbout extends WithStyles<typeof styles>, IState {}

/**
 * Main component that renders a grid container with two text blocks at the left
 * and a subcomponent skills at the right.
 *
 * @param param0
 */
function About(props: IAbout) {
  return (
    <SectionLayout
      sectionId="about"
      sectionTitle="ABOUT"
      sectionSubtitle="Let me introduce myself"
      style="primary"
    >
      <Introduction introduction={props.introduction} />
      <Qualifications qualification={props.qualification} />
      <Education education={props.education}/>
      <Experience experience={props.experience}/>
    </SectionLayout>
  );
}

export default withStyles(styles)(About);
