import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";
import {yellow} from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  yellowPaper: {
    backgroundColor: yellow,
    fontFamily: "cursive",
    color: "lightGreen",
    padding: "30",
  },
}));
const Lecture12 = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container spacing={7} justify="space-between">
          <Grid item lg={4} md={6} sm={12}>
            <Paper component={Box} p={5} className={classes.yellowPaper}>
              <Typography variant="h4">
                Lorem Ipsum is simply dummy text of the printing
              </Typography>
              <Typography variant="subtitle">
                rem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the
              </Typography>
              <Box p={3}>
                <Button variant="contained"> Read More</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={4} md={6} sm={12} alignItems="baseline">
            <Paper
              bgcolor="red"
              component={Box}
              p={5}
              className={classes.yellowPaper}
            >
              <Typography variant="h4">
                Lorem Ipsum is simply dummy text of the printing
              </Typography>
              <Typography variant="subtitle">
                rem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the
              </Typography>
              <Box p={3}>
                <Button vainat="contained"> Read More</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={4} md={6} sm={12} alignItems="baseline">
            <Paper p={5} component={Box} className={classes.yellowPaper}>
              <Typography variant="h4">
                Lorem Ipsum is simply dummy text of the printing
              </Typography>
              <Typography variant="subtitle">
                rem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the
              </Typography>
              <Box p={3}>
                <Button variant="contained"> Read More</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={4} md={6} sm={12} alignItems="baseline">
            <Paper
              bgcolor="red"
              component={Box}
              p={5}
              className={classes.yellowPaper}
            >
              <Typography variant="h4">
                Lorem Ipsum is simply dummy text of the printing
              </Typography>
              <Typography variant="subtitle">
                rem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the
              </Typography>
              <Box p={3}>
                <Button variant="contained"> Read More</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={4} md={6} sm={12} alignItems="baseline">
            <Paper
              bgcolor="red"
              component={Box}
              p={5}
              className={classes.yellowPaper}
            >
              <Typography variant="h4">
                Lorem Ipsum is simply dummy text of the printing
              </Typography>
              <Typography variant="subtitle">
                rem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the
              </Typography>
              <Box p={3}>
                <Button variant="contained"> Read More</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Lecture12;
