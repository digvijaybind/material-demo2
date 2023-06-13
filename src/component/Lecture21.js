import React from "react";
import {makeStyles} from "@mui/styles";
import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
  },
}));
const Lecture21 = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.root}>
        <AppBar>
          <Toolbar>
            <Typography variant="h5" style={{flexGrow: 1}}>
              Material ui
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">story us</Button>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
};

export default Lecture21;
