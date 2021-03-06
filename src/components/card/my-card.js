import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    // minWidth: 275,
    minHeight: 140,
    marginRight: "30px",
    borderTop: "4px solid red"

    // borderImageSource: ` linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))`,
    // borderImageSlice: 1
  },
  title: {
    fontSize: 14
  },
  pos: { float: "right" },
  heading: {
    float: "right",
    color: "white"
  }
});
const MyCard = ({ title, heading, body, action, colors }) => {
  const classes = useStyles();
  console.log(colors);
  return (
    <Card
      style={{ backgroundImage: ` linear-gradient(60deg, ${colors}` }}
      className={classes.card}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography className={classes.heading} variant="h4" component="h2">
          {heading}
        </Typography>
        <br />

        {/* <Typography className={classes.pos} color="textSecondary">
          {body}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">{action}</Button>
      </CardActions> */}
    </Card>
  );
};

export default MyCard;
