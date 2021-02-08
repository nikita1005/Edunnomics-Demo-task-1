import React, { Component } from 'react';
import Cardleft from './Cardleft'
import Cardright from './Cardright'
import { Box , Container , Grid, Paper, Typography, Card, Button} from '@material-ui/core/';

class Lane extends Component{
    constructor(props){
        super(props)
        this.state={
            Data : [{id: 1,title:"Pre-Journey",colour:"#418EDB"} ] ,
            // Data : [{id: 2,title:"During Journey",colour:"#418EDB"} ] ,
            newtitle:"" ,        
        }
    }

    add=(e)=>{
        e.preventDefault()
        const newitem = {title:"Booking",colour:"#44BEB8"}
        const newdata = [...this.state.Data , newitem]
        this.setState({Data:newdata})
    }

    change=()=>{
        this.setState({edit:true})
    }

    render()
    {
        const show = this.state.Data.map(a=><Cardright title={a.title} colour={a.colour}  />)
        
        return(
            <>
            <Paper component={Card} style={{backgroundColor:"#E0F0FD"}}>
                
                <Grid container direction="row" component={Box} border={1} borderColor={'#87ceeb'} p={3}>
                    <Grid item sm={2}>
                        <Cardleft title={this.props.title}/>
                       
                    </Grid>
                    
                    <Grid container item sm={8} direction="row">
                        
                        {show}
                         
                    </Grid>

                    {/* <Grid container item sm={2} direction="row">
                        
                        <Button onClick={this.add}> <Typography variant="h5" style={{color:"black"}}>
                         ADD </Typography> </Button>
                       
                    </Grid> */}
                    
                </Grid>

            </Paper>
            </>
        )
    }
}
export default Lane