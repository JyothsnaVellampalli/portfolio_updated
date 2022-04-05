import React from 'react';
import {Typography, Grid} from '@mui/material';
import react from '../Images/react.png';
import Node from '../Images/node.png';
import Html from '../Images/htmlandcss.png';

function Technologies() {
  return (
    <div id='technologies' style={{backgroundColor:'black', color:'white'}}>
      <Typography variant="h3" style={{margin:'30px'}} >Technologies</Typography>
      <Grid container spacing={1} style={{margin:'30px'}}>
        <Grid item xs={12} sm={4}>
          <img src={react} alt='react' height="150" width="150"/>
          <Typography>React JS</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={Node} alt='node' height="150" width="150"/>
          <Typography>Node JS</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={Html} alt='htmlandcss' height="150" width="150"/>
          <Typography>Html and CSS</Typography>
        </Grid>

      </Grid>
      
    </div>
  )
}

export default Technologies
