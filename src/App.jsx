import React, { Component } from 'react';
import Lanecontainer from './Lanecontainer'
import Header from './Header'
import Newlane from './Newlane'
import { Box , Container , Grid, Paper, Typography, Button, TextField} from '@material-ui/core/';
import Navigation from './Navigation'
import './App.css'

class App extends Component{
  constructor()
  {
    super()
    this.state= {
      Lanedata : [ {id: 1,title:"Phases"} , {id:"2" ,title:"Journey "} , {id:"3" , title:"Story"} ] ,
      createlane: false ,
      textfield: "text",
      id: "" ,
      newLanename:""
   }
  }

  handleNewlane=(e)=>{
    e.preventDefault()
  // this.setState({createlane:true})
  const newitem ={ title:this.state.newLanename}
  const updated = [...this.state.Lanedata , newitem]
  this.setState({Lanedata:updated , createlane:false})
  }

  handlefield=(e)=>{
     this.setState({newLanename:e.target.value})

  }
  handlesubmit=(e)=>{
     e.preventDefault()
     const newitem ={ title:this.state.newLanename}
     const updated = [...this.state.Lanedata , newitem]
     this.setState({Lanedata:updated , createlane:false})
  }
 
  render()
  {
    
    return(
      <div><Navigation/>
      <div className="home">
      <>
      <Grid container>
        
        {/* <Grid container align="center">
          <Grid item sm={12} component={Box} mt={4}>
             <Header handlefield={this.handlefield}/>
          </Grid>
        </Grid> */}

        <Grid item sm={12} style={{marginTop:"5px"}}>
          { this.state.createlane?<Newlane handlefield={this.handlefield} handlesubmit={this.handlesubmit}/>:
          <Lanecontainer Lanedata={this.state.Lanedata} /> }
        </Grid>
        <Grid item sm={12} component={Box} mt={4} style={{marginTop:"5px"}}>
           <Paper component={Box} p={4} style={{backgroundColor:"#FFFFFF"}}>
             
             <Grid container>
               <Grid item sm={2}>
                 <Button variant="contained"  style={{backgroundColor:"FFFFFF"},{borderColor:"#87ceeb"}} border={2} component={Box} ml={3} p={3}> <Typography variant="h5" onClick={this.handleNewlane}> Add Lane </Typography></Button>
               </Grid>

               <Grid item sm={8} style={{marginTop:"-60px"}}>
                 <TextField fullWidth style={{marginTop:"50px"}} label="Add Text" onChange={this.handlefield}/>
               </Grid>

             </Grid>
           </Paper>
        </Grid>
      </Grid> 
      </>
      </div>
      </div>
    )
  }
} 
export default App