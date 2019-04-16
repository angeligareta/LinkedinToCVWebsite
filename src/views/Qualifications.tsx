import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  withStyles
} from "@material-ui/core";

import BulletPoint from "@material-ui/icons/Star";
import { amber } from "@material-ui/core/colors";

import SubSectionLayout from "../components/SubSectionLayout";
/**
 * CSS Syles for Portfolio.
 */
const styles = theme => ({
  bulletPoint: {
    color: amber[700]
  }
});
/**
 * TODO
 *
 * @param param0
 */
function Qualifications({ classes, qualification }) {
  let qualificationsRender = qualification.qualification.map(
    (qualificationObject, index) => (
      <ListItem key={index}>
        <ListItemIcon>
          <BulletPoint className={classes.bulletPoint} />
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
