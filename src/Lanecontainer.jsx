import React, { Component } from 'react';
import Lane from "./Lane"
import { Box , Container , Grid, Paper, Typography,Card} from '@material-ui/core/';

class Lanecontainer extends Component{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const lanes = this.props.Lanedata.map( a=> <Lane title={a.title} />) 
        return(
            <>
            <Grid item sm={12}>
                {lanes}
            </Grid>
            </>
        )
    }
}
export default Lanecontainer