import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  withStyles,
  WithStyles,
  createStyles,
  Grid,
  CircularProgress
} from "@material-ui/core";

import BulletPoint from "@material-ui/icons/Star";
import { amber } from "@material-ui/core/colors";

import SubSectionLayout from "../components/SubSectionLayout";
import { IState } from '../redux/store';


/**
 * CSS Syles for Qualifications.
 */
const styles = theme => createStyles({
  bulletPoint: {
    color: amber[700]
  }
});


/**
 * Data Structure for the props used in Qualifications component.
 */
interface IQualifications extends WithStyles<typeof styles> {
  qualification: IState["qualification"]
}


/**
 * Contains a list of qualifications of the user, fetched from the 
 * LinkedIn profile of the user if it follows an structure.
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
      <Grid container direction="column" justify="center" alignItems="center">
        {(props.qualification.isLoading) 
        ? 
          <CircularProgress size={68}/> 
        : 
          (props.qualification.errMess)
          ? 
            <Typography variant="h4" color="error">{props.qualification.errMess}</Typography>
          :
            <List>{qualificationsRender}</List>
        }
      </Grid>    
    </SubSectionLayout>
  );
}


export default withStyles(styles)(Qualifications);
