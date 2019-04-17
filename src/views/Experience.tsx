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
  CircularProgress
} from "@material-ui/core";

import BulletPoint from "@material-ui/icons/ArrowRight";
import SubSectionLayout from "../components/SubSectionLayout";
import { IState } from '../redux/store';

/**
 * CSS Syles for Portfolio.
 */
const styles = theme => createStyles({
  card: {
    marginBottom: "20px",
    width: "100%",
    minWidth: "30vw",
  },
  bulletPoint: {
    marginRight: "0px"
  },
  cardText: {
    marginLeft: "0px"
  }
});

interface IExperience extends WithStyles<typeof styles> {
  experience: IState["experience"]
}

/**
 * Main component that renders a grid container with two text blocks at the left
 * and a subcomponent skills at the right.
 *
 * @param param0
 */
function Experience(props: IExperience) {
  let experienceCards = props.experience.experience.map(experienceObject => (
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
