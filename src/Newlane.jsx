import React, { Component } from "react";
import Cardleft from "./Cardleft";
import Cardright from "./Cardright";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core/";

class Newlane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Grid container align="center">
          <Grid item sm={8} component={Box} m={1}>
            <Box
              style={
                ({ marginTop: "50px" },
                { borderColor: "white" },
                { backgroundColor: "white" })
              }
              border={1}
              p={2}
              ml={50}
            >
              <Paper style={{ backgroundColor: "#223866	" }}>
                <Typography variant="h5" style={{ color: "white" }}>
                  {" "}
                  ADD LANE{" "}
                </Typography>
              </Paper>

              <TextField
                fullWidth
                style={{ marginTop: "50px" }}
                label="Add Text"
                value={this.props.title}
                onChange={this.props.handlefield}
              />

              <Button
                variant="contained"
                style={
                  ({ marginTop: "25px" },
                  { backgroundColor: "#223866" },
                  { width: 150 })
                }
                color="primary"
                onClick={this.props.handlesubmit}
              >
                {" "}
                <Typography variant="h5"> Add</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
}
export default Newlane;
