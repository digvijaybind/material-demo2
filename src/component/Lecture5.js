import {Box, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme)=>({
  container: {
    maxWidth: "100vw",
    maxHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  mybox: {
    width: 300,
    backgroundColor: "red",
    color: "white",
    borderRadius: "20px",
    padding: "100px",
    boxShadow: "0px 10px 10px rgba(0,0,0,0.1)",
  },
  headline: {
    color: "green",
    fontSize: "20px",
    fontFamily: "sans-serif",
    fontWeight: "900",
  },
  paragraph: {
    color: "blue",
    fontFamily: "cursive",
    fontWeight: "700",
  },
}));

const Lecture5 = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container}>
        <Box className={classes.mybox}>
          <Typography variant="h4" className={classes.headline}>
            Hedaline hii
          </Typography>
          <Typography variant="subtitle" className={classes.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever{" "}
          </Typography>
        </Box>
        <Box className={classes.mybox}>
          <Typography variant="h4" className={classes.headline}>
            Hedaline hii
          </Typography>
          <Typography variant="subtitle" className={classes.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever{" "}
          </Typography>
        </Box>
        <Box className={classes.mybox}>
          <Typography variant="h4" className={classes.headline}>
            Hedaline hii
          </Typography>
          <Typography variant="subtitle" className={classes.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever{" "}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default Lecture5;
