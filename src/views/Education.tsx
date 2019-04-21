import * as React from 'react';
import {
  Grow,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
  WithStyles,
  createStyles,
  CircularProgress
} from "@material-ui/core";

import BulletPoint from "@material-ui/icons/ArrowRight";
import SubSectionLayout from "../components/SubSectionLayout";
import { IState } from '../redux/store';


/**
 * CSS Syles for Education.
 */
const styles = theme => createStyles({
  education: {},
  card: {
    marginBottom: "20px",
    width: "100%",
    minWidth: "100%"
  },
  bulletPoint: {
    marginRight: "0px"
  },
  cardText: {
    marginLeft: "0px"
  }
});


/**
 * Data Structure for the props used in Education component.
 */
interface IEducation extends WithStyles<typeof styles> {
  education: IState["education"]
}


/**
 * Contains a set of cards, each one representing a previous education of the user.
 * The structure of the cards is:
 * 
 *  - StartDate and endDate (or present).
 *  - School studied.
 *  - Degree studied.
 *  - List of facts.
 *
 * @param props
 */
function Education(props: IEducation) {
  let educationCards = props.education.education.map(educationObject => (
    <Grow in={true} style={{ transformOrigin: "0 0 0", timeout: 1000 }}>
      <Card raised className={props.classes.card}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {educationObject.startDate + " - "}
            {educationObject.endDate === "" ? "PRESENT" : educationObject.endDate}
          </Typography>
          <Typography variant="h5">{educationObject.school}</Typography>
          <Typography color="textSecondary">{educationObject.degree}</Typography>
          <List>
            {educationObject.facts.map(fact => (
              <ListItem>
                <ListItemIcon>
                  <BulletPoint className={props.classes.bulletPoint} />
                </ListItemIcon>
                <ListItemText className={props.classes.cardText}>{fact}</ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grow>
  ));

  return (
    <SubSectionLayout title="My Education.">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {(props.education.isLoading) 
        ? 
          <CircularProgress size={68}/> 
        : 
          (props.education.errMess)
          ? 
            <Typography variant="h4" color="error">{props.education.errMess}</Typography>
          :
          <div>{educationCards}</div>
        }
      </Grid>
    </SubSectionLayout>
  );
}


export default withStyles(styles)(Education);
