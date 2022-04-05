import React from 'react';
import {Grid, Typography} from '@mui/material';
import Img from '../Images/dev.jpg'

function Home() {
  return (
    <div id='home' style={{backgroundColor: 'black', color:'white', padding:'20px'}}>
    <Grid container spacing={3}>
        
        <Grid item xs={12} sm={4}>
        <img src={Img} style={{height:'300px', width:'300px', margin:'20px'}}/>
        </Grid>
        <Grid item xs={12} sm={8}>
            <Typography variant="h6" style={{color:'#9e9e9e'}}>Hi! I'm</Typography>
            <Typography variant="h3">Jyothsna Vellampalli</Typography>
            <Typography variant='h5' color='secondary'>FullStack Developer</Typography>
            <Typography variant='subtitle1' style={{color:'#9e9e9e'}}>I am a passionate and creative full-stack developer. 
            I am interested in soving <br/>new problems and 
            I always try to update my skills as per the current technologies.  </Typography>
        </Grid>

    </Grid>
      
    </div>
  )
}

export default Home
