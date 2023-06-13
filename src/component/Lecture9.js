import {Box, Button, Container, Paper, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
const useStyles = makeStyles((theme) => ({
  mybox: {
    backgroundColor: "red",
    color: "green",
  },
}));
const Lecture9 = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth>
        <Paper component={Box} p={4} className={classes.mybox}>
          <Typography variant="h4"> Read Docs</Typography>
          <Typography variant="subtitle1">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five cent{" "}
          </Typography>
          <Box mt={3}>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              size="large"
              endIcon={<AccessTimeFilledIcon />}
            >
              Read more
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture9;
