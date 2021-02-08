import React, { Component } from 'react';
import Draggable from "react-draggable";
import { Box , Container , Grid, Paper, Typography, Card ,TextField} from '@material-ui/core/';

class Cardright extends Component{
    render()
    {
        return(
            <>
        
            <Grid item sm={3}>
                <Draggable>                    
    
                    <Card onClick={this.props.change} style={{backgroundColor:this.props.colour,height:"80px" }} component={Box} border={0} p={3} ml={2} mr={2}>
                   {this.props.edit? 
                   <TextField /> :
                   <Typography variant="h5" align="center" style={{textDecorationColor:"white"}}> {this.props.title} </Typography>
                   } 
                    </Card>
    
    
                </Draggable>
            </Grid>
    
            </>
        )
    }
}
export default Cardright