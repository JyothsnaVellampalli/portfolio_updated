import { Typography, Box, AppBar, Container, Toolbar, Button, Avatar, IconButton } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navbar() {
  
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
                    <IconButton >
                    <Avatar>
                      <a href='https://github.com/JyothsnaVellampalli/'>
                    <GitHubIcon/>
                    </a>
                    </Avatar>
                    </IconButton>
                    <Avatar>
                    <a href='https://www.linkedin.com/in/jyothsna-vellampalli-5aa15417b/'>
                    <LinkedInIcon/>
                    </a>
                    </Avatar>
                    
            </Toolbar>
          </Container>
      </AppBar>
   
  )
}

export default Navbar
