import {Box, Button, Container, Paper, Typography} from "@mui/material";
import React from "react";

const Lecture6 = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Paper
          square
          variant="outlined"
          component={Box}
          p={5}
          justifyContent="center"
          alignContent="flex-start"
        >
          <Typography variant="h4">Read docs</Typography>
          <Typography variant="subtitle">
            {" "}
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley
          </Typography>
          <Button variant="contained" color="secondary" p={5}>
            Learn More
          </Button>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture6;
