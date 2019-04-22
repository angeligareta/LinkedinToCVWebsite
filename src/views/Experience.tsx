import * as React from 'react';
import {
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
  createStyles,
  WithStyles,
  CircularProgress,
  Grow
} from "@material-ui/core";

import BulletPoint from "@material-ui/icons/ArrowRight";
import SubSectionLayout from "../components/SubSectionLayout";
import { IState } from '../redux/store';

/**
 * CSS Syles for Experience.
 */
const styles = theme => createStyles({
  card: {
    marginBottom: "20px",
    width: "100%",
    minWidth: "30vw"
  },
  bulletPoint: {
    marginRight: "0px"
  },
  cardText: {
    marginLeft: "0px"
  }
});

/**
 * Data Structure for the props used in Experience component.
 */
interface IExperience extends WithStyles<typeof styles> {
  experience: IState["experience"]
}

/**
 * Contains a set of cards, each one representing a work experience of the user.
 * The structure of each card is:
 * 
 *  - StartDate and endDate (or Present).
 *  - Position.
 *  - Company.
 *  - List of facts of the job.
 *
 * @param props
 */
function Experience(props: IExperience) {
  let experienceCards = props.experience.experience.map(experienceObject => (
    <Grow in={true} style={{ transformOrigin: "0 0 0", timeout: 1000 }}>
      <Grid item xs={8}>
        <Card raised className={props.classes.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {experienceObject.startDate + " - "}
              {experienceObject.endDate === "" ? "PRESENT" : experienceObject.endDate}
            </Typography>
            <Typography variant="h5">{experienceObject.position}</Typography>
            <Typography color="textSecondary">{experienceObject.company}</Typography>
            <List>
              {experienceObject.facts.map(fact => (
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
      </Grid>
    </Grow>
  ));

  return (
    <SubSectionLayout title="My Work Experience.">
      <Grid container direction="column" justify="center" alignItems="center">
        {(props.experience.isLoading) 
        ? 
          <CircularProgress size={68}/> 
        : 
          (props.experience.errMess)
          ? 
            <Typography variant="h4" color="error">{props.experience.errMess}</Typography>
          :
            experienceCards
        }
      </Grid>    
    </SubSectionLayout>
  );
}


export default withStyles(styles)(Experience);
