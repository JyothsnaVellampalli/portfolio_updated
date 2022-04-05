import React from 'react';
import {Typography, Grid} from '@mui/material';
import react from '../Images/1.png';
import Node from '../Images/2.png';
import Html from '../Images/3.png';

function Technologies() {
  return (
    <div id='technologies' style={{backgroundColor:'black', color:'white', paddingTop:'10px', paddingBottom:'20px'}}>
      <Typography variant="h3" style={{margin:'30px'}} >Technologies</Typography>
      <Grid container spacing={1} style={{marginLeft:'100px'}}>
        <Grid item xs={12} sm={4} >
          <img src={react} alt='react' height="150" width="150"/>
          <Typography style={{marginLeft:'38px'}}>React JS</Typography>
        </Grid>
        <Grid item xs={12} sm={4} >
          <img src={Node} alt='node' height="150" width="150"/>
          <Typography style={{marginLeft:'38px'}}>Node JS</Typography>
        </Grid>
        <Grid item xs={12} sm={4} >
          <img src={Html} alt='htmlandcss' height="150" width="150"/>
          <Typography style={{marginLeft:'38px'}}>Html and CSS</Typography>
        </Grid>

      </Grid>
      
    </div>
  )
}

export default Technologies
