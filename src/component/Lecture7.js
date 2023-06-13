import {Container, Typography, color} from "@mui/material";
import {lightGreen, orange, red} from "@mui/material/colors";
import React from "react";
import {makeStyles} from "@mui/styles";
const useStyles = makeStyles({
  myHeadline: {
    backgroundColor: red[500],
    color: orange[500],
  },
});

const Lecture7 = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.myHeadline}>
        <Typography variant="h2" style={{backGroundColor: orange[900]}}>
          Hello World
        </Typography>
      </Container>
    </div>
  );
};
export default Lecture7;
