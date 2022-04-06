import { Typography, Grid, Card, CardContent } from '@mui/material'
import React from 'react'

function About() {
  return (
    <div id='aboutme' style={{backgroundColor:'black',padding :'20px'}}> 
      <Typography variant="h4" style={{color:'white'}}>About Me</Typography>
      <Typography variant="subtitle1" style={{color:'#616161'}}>I have been working on web 
      development tools and developing my skill of designing efficient Web Applications.</Typography>
      <Grid container spacing={4} style={{marginTop:'5px'}}>
          <Grid item xs={12} sm={3}>
              <Card style={{boxShadow : '2px 2px 4px 2px gray', backgroundColor : '#bdbdbd'}}>
                <CardContent>
              <Typography>2021</Typography>
              <Typography variant="subtitle">Started my Developer Journey</Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
          <Card style={{boxShadow : '2px 2px 4px 2px gray', backgroundColor : '#bdbdbd'}}>
            <CardContent>
            <Typography>2019</Typography>
            <Typography variant="subtitle">Graduated from JNTUA College of Engineering with an aggregate of 7.9/10</Typography> 
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
          <Card style={{boxShadow : '2px 2px 4px 2px gray', backgroundColor : '#bdbdbd'}}>
                <CardContent>
              <Typography>2015</Typography>
              <Typography variant="subtitle">Passed Intermediate with 96.1%</Typography>
            </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
          <Card style={{boxShadow : '2px 2px 4px 2px gray', backgroundColor : '#bdbdbd'}}>
                <CardContent>
              <Typography>2013</Typography>
              <Typography variant="subtitle">Passed AP State Board Examination with grades 9.5/10</Typography>
              </CardContent>
              </Card>
          </Grid>
      </Grid>

    </div>
  )
}

export default About
