import {
  Box,
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "green",
    padding: "20px",
  },
  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "30%",
    height: "100%",
    backgroundColor: "black",
    borderRadius: "10px",
    color: "white",
    margin: "20px",
  },
}));

const Lecture19 = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Container className={classes.container}>
        <Paper
          component={Box}
          width="30%"
          p={4}
          mx="auto"
          boxShadow={4}
          className={classes.sidebar}
        >
          <Collapse in={open}>
            <List disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Getting started" />
              </ListItem>
            </List>
          </Collapse>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture19;
