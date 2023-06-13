import {
  Container,
  Typography,
  Button,
  Paper,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
    padding: "29px",
  },
}));

const Lecture15 = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.root}>
        <Paper component={Box} width="30%" p={4}>
          <Typography variant="h5">Create new Account</Typography>
          <form component="form" mt={2}>
            <TextField
              fullWidth
              placeholder="Enter the your first name"
              margin="normal"
              variant="outlined"
              color="secondary"
              label="First name"
              InputProps={{
                startAdorment: (
                  <InputAdornment>
                    <ShoppingBasketIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              placeholder="Enter the your Last name"
              margin="normal"
              variant="outlined"
              color="secondary"
              label="Last name"
            />
            <TextField
              fullWidth
              placeholder="reply messsagw"
              margin="normal"
              variant="outlined"
              color="secondary"
              label="msg"
              multiline
              rows={4}
            />
          </form>
          <Box>
            <Button variant="contained" color="secondary"> Sign up</Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture15;
