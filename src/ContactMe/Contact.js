import React from 'react';
import {Typography, Box} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

function Contact() {
  return (
    <div style={{margin:'15px'}}>
      <Typography variant="h5">
          
           Contact Me</Typography>
      
      <Box sx={{ display: 'flex' }}>
      <Box>
      <MailIcon/>
      </Box>
      <Typography style={{marginLeft:'10px'}}>
      jyothsnavellampalli@gmail.com
      </Typography>
      </Box> 
    </div>
  )
}

export default Contact

