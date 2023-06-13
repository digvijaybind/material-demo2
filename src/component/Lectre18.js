import {
  Box,
  Container,
  FormControlLabel,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
  },
}));
const Lectre18 = () => {
  const classes = useStyles();
  const [autoPlay, setAutoplay] = useState(false);
  return (
    <div>
      <Container className={classes.root}>
        <Paper component={Box} width="30%" p={4} mx="auto">
          <Typography color="secondary" variant="h4" align="center">
            {" "}
            Hello material ui
          </Typography>
          <Typography>
            {autoPlay ? "play all videos" : "stop playing videos"}
          </Typography>
          <FormControlLabel
            label="auto play"
            control={<Switch onChange={(e) => setAutoplay(e.target.checked)} />}
          />
        </Paper>
      </Container>
    </div>
  );
};
export default Lectre18;
