import React from "react";
import {makeStyles} from "@mui/styles";
import {Box, Button, Container, Paper, Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    backgroundColor: "gray",
  },
}));

const Lecture10 = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <Paper width="70%" component={Box} p={4} bgcolor="red">
          <Typography variant="h4">Get Started</Typography>
          <Typography variant="subtitle1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </Typography>
          <Box>
            <Button color="secondary" variant="contained">
              {" "}
              Read More
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture10;
