import React, { Component } from 'react';
// import Cardright from './Cardright'
// import Lane from './Lane'
import { Box , Container , Grid, Paper, Typography,Card,Button} from '@material-ui/core/';

class Cardleft extends Component{
    render()
    {
        return(
            <>
            <Paper >
            <Card  style={{backgroundColor:"#AED8FA	"}} component={Box}  p={3}>  {/*//#9370db */}
                <Typography variant="h5"  align="center"> {this.props.title} </Typography>
                {/* <Button onClick={this.add}> <Typography variant="h5" style={{color:"black"}}>
                         + </Typography> </Button> */}
            </Card>
            </Paper>
            </>
        )
    }
}
export default Cardleft