import React from 'react';
import {Typography, Box, Button} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

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
      
      <Box sx={{ display: 'flex' }}>
      <Box>
      <ContactPhoneIcon/>
      </Box>
      <Typography style={{marginLeft:'10px'}}>
      9515430520
      </Typography>
      </Box>
    </div>
  )
}

export default Contact

