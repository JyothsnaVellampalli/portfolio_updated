import { Typography, Box, AppBar, Container, Toolbar, Button, Avatar, IconButton } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';


function Navbar() {
  const Opengithub = ()=>{
    window.open("https://github.com/JyothsnaVellampalli/");
  }
  
  return (
    
      <AppBar position="static" style={{backgroundColor:'black'}}>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
                <Typography variant='h5' sx={{mr:2,display:{xs:'none', md:'flex', flexGrow : 1} }}>Portfolio</Typography>

                    {/* <Button sx={{ my: 2, color: 'white', display: 'block' }}><a href='#projects' >Projects</a></Button>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Technologies</Button>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>About</Button> */}
                    
                    <a href='#projects' style={{textDecoration:'none', color:'white',padding:'8px'}} >PROJECTS</a>
                    <a href='#technologies' style={{textDecoration:'none', color:'white',padding:'8px'}}>TECHNOLOGIES</a>
                    <a href='#aboutme' style={{textDecoration:'none', color:'white',padding:'8px'}}>ABOUT ME</a>
                    <IconButton onClick={Opengithub} >
                    <Avatar>
                    <GitHubIcon/>
                    </Avatar>
                    </IconButton >
                    
                    
            </Toolbar>
          </Container>
      </AppBar>
   
  )
}

export default Navbar
