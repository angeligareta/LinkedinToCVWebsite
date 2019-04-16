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
  withStyles
} from "@material-ui/core";

import BulletPoint from "@material-ui/icons/ArrowRight";

import SubSectionLayout from "../components/SubSectionLayout";
import { EXPERIENCE } from "../assets/experience";
/**
 * CSS Syles for Portfolio.
 */
const styles = theme => ({
  card: {
    marginBottom: "20px",
    width: "75%",
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
 * Main component that renders a grid container with two text blocks at the left
 * and a subcomponent skills at the right.
 *
 * @param param0
 */
function Experience({ classes, experience }) {
  let experienceCards = experience.experience.map(experienceObject => (
    <Card raised className={classes.card}>
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
                <BulletPoint className={classes.bulletPoint} />
              </ListItemIcon>
              <ListItemText className={classes.cardText}>{fact}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  ));
  return (
    <SubSectionLayout title="My Work Experience.">
      <Grid container direction="column" justify="center" alignItems="center">
        {experienceCards}
      </Grid>
    </SubSectionLayout>
  );
}

export default withStyles(styles)(Experience);
