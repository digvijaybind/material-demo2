import {
  Container,
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
  FormControl,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
  },
}));
const Lecture17 = () => {
  const classes = useStyles();
  const [remeber, setRemeber] = useState(false);
  const handleChange = (e) => {
    setRemeber(e.target.checked);
  };
  return (
    <div>
      <Container className={classes.root}>
        <Paper component={Box} width="30%" p={4} mx="auto">
          <Typography>{remeber ? "true" : "false"}</Typography>
          <Box component="form">
            <FormControl>
              <FormControlLabel
                label="Keep me remeber"
                control={
                  <Checkbox
                    onChange={handleChange}
                    checked={remeber}
                    icon={<AdUnitsIcon />}
                  />
                }
              />
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture17;
