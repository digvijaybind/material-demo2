import {Container} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mybox: {
    backgroundColor: "red",
    color: "green",
  },
}));

const Lecture11 = () => {
  const classes = useStyles();
  return (
    <div>
      <Container></Container>
    </div>
  );
};
export default Lecture11;
