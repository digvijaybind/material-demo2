//Icons
import {Box, Container, Icon, Paper} from "@mui/material";
import {blue, lightBlue, orange, red} from "@mui/material/colors";
import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
const Lecture8 = () => {
  return (
    <div>
      <Container>
        <Paper component={Box} p={3} flexDirection="column">
          <Icon style={{fontSize: 40, color: lightBlue[400]}}>
            {" "}
            <AccessAlarmIcon />{" "}
          </Icon>
          <Icon style={{color: red[700]}}>
            {" "}
            <AccessibilityIcon />{" "}
          </Icon>
          <Icon style={{fontSize: 40, color: red[700]}}> article </Icon>
          <Icon style={{fontSize: 40, color: blue[700]}}> article </Icon>
          <Icon style={{fontSize: 40}}> article </Icon>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture8;
