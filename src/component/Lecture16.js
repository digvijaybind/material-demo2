import {
  Container,
  Paper,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
    paddingTop: "5px",
  },
}));

const Lecture16 = () => {
  const classes = useStyles();
  const [gender, setGender] = useState("male");

  const handleChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div>
      <Container className={classes.root}>
        <Paper component={Box}>
          <Box component="form">
            <FormLabel> Choose Your Gender</FormLabel>
            <RadioGroup value={gender} onChange={handleChange}>
              <FormControlLabel label="Male" control={<radio />} value="male" />
              <FormControlLabel
                label="Female"
                control={<radio />}
                value="Female"
              />
              <FormControlLabel
                label="Other"
                control={<radio />}
                value="other"
              />
            </RadioGroup>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture16;
