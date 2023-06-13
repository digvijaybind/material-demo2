import {Box, Container, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  headline: {
    color: "blue",
    fontSize: "30px",
  },
  paragraph: {
    color: "red",
    fontSize: "12px",
  },
});
const Lecture4 = () => {
  const classes = useStyles();
  return (
    <div>
      <Container disableGutters={true}>
        <Box textAlign="center" pt={5}>
          <Typography variant="h4" className={classes.headline}>
            Why Choose Us?
          </Typography>
          <Typography variant="subtitle" className={classes.paragraph}>
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </Typography>
        </Box>
      </Container>
    </div>
  );
};
export default Lecture4;
