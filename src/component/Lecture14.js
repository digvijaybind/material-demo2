import React from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
  },
}));
const Lecture14 = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <Card p={5}>
              <CardHeader
                avatar={<Avatar>DB</Avatar>}
                title="digvijay bind"
                subheader="posted on 11 aug 2020"
                action={
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                }
              />
              <CardMedia
                image="https://via.placeholder.com/300*120"
                style={{height: 300}}
              />
              <CardContent>
                <Typography variant="h5">Post title</Typography>
                <Typography variant="subtitle1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Typography>
                <CardActions>
                  <Button variant="contained" color="secondary">
                    Read more
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card p={5}>
              <CardHeader
                avatar={<Avatar>DB</Avatar>}
                title="digvijay bind"
                subheader="posted on 11 aug 2020"
                action={
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                }
              />
              <CardMedia
                image="https://via.placeholder.com/300*120"
                style={{height: 300}}
              />
              <CardContent>
                <Typography variant="h5">Post title</Typography>
                <Typography variant="subtitle1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">Read more</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card p={5}>
              <CardHeader
                avatar={<Avatar>DB</Avatar>}
                title="digvijay bind"
                subheader="posted on 11 aug 2020"
                action={
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                }
              />
              <CardMedia
                image="https://via.placeholder.com/300*120"
                style={{height: 300}}
              />
              <CardContent>
                <Typography variant="h5">Post title</Typography>
                <Typography variant="subtitle1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card p={5}>
              <CardHeader
                avatar={<Avatar>DB</Avatar>}
                title="digvijay bind"
                subheader="posted on 11 aug 2020"
                action={
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                }
              />
              <CardMedia
                image="https://via.placeholder.com/300*120"
                style={{height: 300}}
              />
              <CardContent>
                <Typography variant="h5">Post title</Typography>
                <Typography variant="subtitle1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Lecture14;
