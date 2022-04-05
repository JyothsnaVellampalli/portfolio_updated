import { Typography, Grid, Card, CardContent } from '@mui/material'
import React from 'react'

function About() {
  return (
    <div id='aboutme' > 
      <Typography variant="h4" style={{color:'#4a148c'}}>About Me</Typography>
      <Typography variant="subtitle1" style={{color:'#616161'}}>I have been working on web 
      development tools and developing my skill of designing efficient web applications.</Typography>
      <Grid container spacing={5} style={{marginTop:'5px'}}>
          <Grid item xs={12} sm={3}>
              <Card style={{boxShadow : '2px 2px 4px 2px gray', backgroundColor : '#bdbdbd'}}>
                <CardContent>
              <Typography>2021</Typography>
              <Typography variant="subtitle">Started my developer Journey</Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
          <Card style={{boxShadow : '2px 2px 4px 2px gray', backgroundColor : '#bdbdbd'}}>
            <CardContent>
            <Typography>2019</Typography>
            <Typography variant="subtitle">Graduated from JNTUA college of Engineering with an aggregate of 7.9/10</Typography> 
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
              <Typography variant="subtitle">Passed AP state Board examination with grades 9.5/10</Typography>
              </CardContent>
              </Card>
          </Grid>
      </Grid>

    </div>
  )
}

export default About
