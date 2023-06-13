import React, {useState, useEffect} from "react";
import {
  Fab,
  Container,
  Box,
  Stack,
  Grid,
  Card,
  CardActionArea,
  cardMedia,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
  },
  add: {
    position: "fixed",
    right: "5%",
    paddingBottom: "100",
  },
}));

const Lecture13 = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(result.data);
  };

  useEffect(() => {
    loadUsers();
  });
  return (
    <Container className={classes.root}>
      <Fab color="secondary" className={classes.add} variant="extended">
        <AddIcon />
        Create User
      </Fab>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/300*200/555"
                />
                <CardContent>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography>{user.email}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Lecture13;
