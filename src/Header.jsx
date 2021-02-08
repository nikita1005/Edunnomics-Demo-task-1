import React, { Component } from 'react';
import { Box , Container , Grid, Typography, Paper} from '@material-ui/core/';


const Header=(props)=>{
    return(
        <div>
            
                <Grid item lg={11} component={Box} >
                    <Paper component={Box} elevation={5} borderColor="#d50000">
                         <Typography  variant="h2" align="center"> 
                         A Demo Application For Edunomics
                         </Typography>
                    </Paper>
              </Grid>
            
        </div>
    )
}
export default Header