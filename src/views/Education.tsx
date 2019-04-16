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
  withStyles
} from "@material-ui/core";

import BulletPoint from "@material-ui/icons/ArrowRight";
import SubSectionLayout from "../components/SubSectionLayout";
/**
 * CSS Syles for Portfolio.
 */
const styles = theme => ({
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
 * Main component that renders a grid container with two text blocks at the left
 * and a subcomponent skills at the right.
 *
 * @param param0
 */
function Education({ classes, education }) {
  let educationCards = education.education.map(educationObject => (
    <Grow in={true} style={{ transformOrigin: "0 0 0", timeout: 1000 }}>
      <Card raised className={classes.card}>
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
                  <BulletPoint className={classes.bulletPoint} />
                </ListItemIcon>
                <ListItemText className={classes.cardText}>{fact}</ListItemText>
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
        justify="flex-start"
        alignItems="flex-start"
      >
        {educationCards}
      </Grid>
    </SubSectionLayout>
  );
}

export default withStyles(styles)(Education);
