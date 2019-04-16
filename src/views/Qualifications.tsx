import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  withStyles,
  WithStyles,
  createStyles
} from "@material-ui/core";

import BulletPoint from "@material-ui/icons/Star";
import { amber } from "@material-ui/core/colors";

import SubSectionLayout from "../components/SubSectionLayout";
import { IState } from '../redux/store';

/**
 * CSS Syles for Portfolio.
 */
const styles = theme => createStyles({
  bulletPoint: {
    color: amber[700]
  }
});

interface IQualifications extends WithStyles<typeof styles> {
  qualification: IState["qualification"]
}

/**
 * TODO
 *
 * @param param0
 */
function Qualifications(props: IQualifications) {
  let qualificationsRender = props.qualification.qualification.map(
    (qualificationObject, index) => (
      <ListItem key={index}>
        <ListItemIcon>
          <BulletPoint className={props.classes.bulletPoint} />
        </ListItemIcon>
        <ListItemText primary={qualificationObject} />
      </ListItem>
    )
  );

  return (
    <SubSectionLayout title="My Qualifications.">
      <List>{qualificationsRender}</List>
    </SubSectionLayout>
  );
}

export default withStyles(styles)(Qualifications);
