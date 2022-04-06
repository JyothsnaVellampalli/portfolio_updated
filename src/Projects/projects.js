import React from 'react';
import {Card, CardHeader, CardContent, Grid, Typography} from'@mui/material';
import {MarkdownCard, CommerceCard, ExpenseTracker} from './ProjectCard';

function projects() {
  return (
      <div id='projects' style={{backgroundColor:'black', paddingTop:'10px',paddingBottom:'20px'}}> 
    <Typography variant="h3" style={{marginLeft:'40px',marginTop:'30px',marginBottom:'20px',color:'white'}}>Projects</Typography>
    <Grid container spacing={3} style={{paddingRight:'25px', paddingLeft:'10px'}}>
        <Grid item  sm={4} >
        <MarkdownCard/> 
        </Grid>
         <Grid item xs={12} sm={4}>
         <ExpenseTracker/>
        </Grid>
        <Grid item xs={12} sm={4}>
        
        <CommerceCard/>
        </Grid>
    </Grid>
    </div>
  )
}

export default projects

