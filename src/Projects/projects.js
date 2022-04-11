import React from 'react';
import {Card, CardHeader, CardContent, Grid, Typography} from'@mui/material';
import {MarkdownCard, CommerceCard, ExpenseTracker, Connect} from './ProjectCard';

function projects() {
  return (
      <div id='projects' style={{backgroundColor:'black', paddingTop:'10px',paddingBottom:'20px'}}> 
    <Typography variant="h3" style={{marginLeft:'40px',marginTop:'30px',marginBottom:'20px', color:'white'}}>Projects</Typography>

    <Grid container spacing={16}  justifyContent="center"
    alignItems="center"
    >
        <Grid item xs={8} sm={5}>
        <MarkdownCard/> 
        </Grid>
         <Grid item xs={8} sm={5}>
         <ExpenseTracker/>
        </Grid>
        
    </Grid>

    <Grid container spacing={16} justifyContent="center"
    alignItems="center"
    >
      <Grid item xs={8} sm={5} style={{marginTop:'30px'}}>
        
        <CommerceCard/>
        </Grid>
        <Grid item xs={8} sm={5}  style={{marginTop:'30px'}}>
        
        <Connect/>
        </Grid>
    </Grid>
    </div>
  )
}

export default projects

