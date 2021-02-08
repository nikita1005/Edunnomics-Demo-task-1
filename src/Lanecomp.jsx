import React, { Component } from 'react';
import { Box , Container , Grid, Typography, Paper} from '@material-ui/core/';


const Lanecomp=(props)=>{
    

    return(
        <div onClick={props.fun}>
             
              <Paper component={Box} p={4} style={{backgroundColor:"#87ceeb"}}  borderBottom={3} borderColor="#d50000">
                  <Typography  variant="h5" align="center"> {props.title} </Typography>
              </Paper>
        </div>
    )
}
export default Lanecomp