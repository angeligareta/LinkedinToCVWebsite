import * as React from 'react';
import { withStyles, createStyles, WithStyles } from "@material-ui/core";

import SectionLayout from "../components/SectionLayout";

import Introduction from "./Introduction";
import Education from "./Education";
import Qualifications from "./Qualifications";
import Experience from "./Experience";
import { IState } from '../redux/store';


/**
 * CSS Syles for About.
 */
const styles = theme => createStyles({
  about: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 8}px`,
    textAlign: "justify"
  }
});


/**
 * Data Structure for the props used in About component.
 */
interface IAbout extends WithStyles<typeof styles> {
  introduction: IState["introduction"],
  qualification: IState["qualification"],
  education: IState["education"],
  experience: IState["experience"],
  userData: IState["userData"]
}


/**
 * Main component that represents the About section of the app. It contains four subcomponents:
 * 
 *  - Introduction: Contains an Avatar image and a brief introduction of the user.
 *  - Qualifications: List of qualifications of the user.
 *  - Education: Contains multiple cards, each one representing a previous education of the user.
 *  - Experience: Contains multiple cards, each one representing a work experience of the user.
 *
 * @param props
 */
function About(props: IAbout) {
  return (
    <SectionLayout
      sectionId="about"
      sectionTitle="ABOUT"
      sectionSubtitle="Let me introduce myself"
      style="primary"
    >
      <Introduction introduction={props.introduction} userData={props.userData}/>
      <Qualifications qualification={props.qualification} />
      <Education education={props.education}/>
      <Experience experience={props.experience}/>
    </SectionLayout>
  );
}


export default withStyles(styles)(About);
