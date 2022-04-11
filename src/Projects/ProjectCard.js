import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, Typography, Box, Button} from '@mui/material';
import Markdown from '../Images/markdown.png';
import Commerce from '../Images/eCommerce.png';
import expensetracker from '../Images/expenseTracker.png';
import ConnectImg from '../Images/connect1.png';

export function MarkdownCard() {
    
        const Openlink = (link)=>{
          window.open(link);
        }

  return (
    <Card >
        
        <CardMedia component='img'  alt='image' image={Markdown} />
        <CardHeader title="Markdown Viewer" style={{color:'#ef5350'}}/>
        <CardContent>
            <Typography variant="body2" color="text.secondary">This is a basic Markdown viewer that displays
             the input code in readable format.
                This project is included with Signup, Verification , Login and Forgot Password pages. 
                Libraries like NodeMailer, bcrypt and react-markdown are used. </Typography>
            <Box sx={{display:'flex', justifyContent: 'space-between', marginTop:'10px'}}>
                <Typography style={{color:'#ef5350'}}>Source Code :</Typography>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://github.com/JyothsnaVellampalli/markdown_fe')}>
                    Frontend</Button>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://github.com/JyothsnaVellampalli/markdown_be')}>
                    Backend</Button>
                
            </Box>

            <Box sx={{display:'flex', justifyContent: 'space-between', marginTop:'10px'}}>
                <Typography style={{color:'#ef5350'}}>Deployed Site :</Typography>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://delicate-douhua-2288c9.netlify.app/')}>
                    Frontend</Button>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://markdownbe.herokuapp.com/')}>
                    Backend</Button>
                
            </Box>
        </CardContent>
        
    </Card>
  )
}

export function CommerceCard(){
    const Openlink = (link)=>{
        window.open(link);
      }
    return(
        <Card>
           <CardMedia component='img'  alt='image' image={Commerce} />
           <CardHeader title="E-Commerce Website" style={{color:'#ab47bc'}}/>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                In this project, product details are scraped from different shopping websites.
                 Features like Cart, Checkout Form, Review page, Payment Form are added to make it user's friendly.
                 Libraries like Cheerio, Stripe are included for WebScraping and Payment Process.
            </Typography>
            <Box sx={{display:'flex', justifyContent: 'space-between', marginTop:'10px'}}>
                <Typography style={{color:'#ef5350'}}>Source Code :</Typography>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://github.com/JyothsnaVellampalli/webscraping_fe')}>
                    Frontend</Button>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://github.com/JyothsnaVellampalli/webscraping_be')}>
                    Backend</Button>
            </Box>

            <Box sx={{display:'flex', justifyContent: 'space-between', marginTop:'10px'}}>
                <Typography style={{color:'#ef5350'}}>Deployed Site :</Typography>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://webscraping-commerce.netlify.app/')}>
                    Frontend</Button>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://expresswebscraping.herokuapp.com/')}>
                    Backend</Button>
            </Box>
        </CardContent>
        </Card>
    )
}

export function ExpenseTracker(){
    const Openlink = (link)=>{
        window.open(link);
      }
    return(
        <Card>
           <CardMedia component='img'  alt='image' image={expensetracker} />
           <CardHeader title="Expense Tracker" style={{color:'#673ab7'}}/>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                This Expense Tracker is powered by Speechly. Doughnut chart of 
                income and expenditure is added using chart.js. List of transactions and net value is displayed. 
            </Typography>
            <Box sx={{display:'flex', justifyContent: 'space-between', marginTop:'10px'}}>
                <Typography style={{color:'#ef5350'}}>Source Code :</Typography>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://github.com/JyothsnaVellampalli/expense_tracker_fe')}>
                    Frontend</Button>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://github.com/JyothsnaVellampalli/expense_tracker_be')}>
                    Backend</Button>
            </Box>

            <Box sx={{display:'flex', justifyContent: 'space-between', marginTop:'10px'}}>
                <Typography style={{color:'#ef5350'}}>Deployed Site :</Typography>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://expense-tracker-jyothsna.netlify.app/')}>
                    Frontend</Button>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://expensetracker-express.herokuapp.com/')}>
                    Backend</Button>
            </Box>
        </CardContent>
        </Card>
    )
}


export function Connect(){
    const Openlink = (link)=>{
        window.open(link);
      }
    return(
        <Card>
           <CardMedia component='img'  alt='image' image={ConnectImg} />
           <CardHeader title="Connect (SocialMedia)" style={{color:'#673ab7'}}/>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                This is a Social Media application. In this you can follow other users and your followers are listed. 
                You can post something interesting.
                Timeline and profile pages can be seen. You can see posts of people whom you follow.
            </Typography>
            <Box sx={{display:'flex', justifyContent: 'space-between', marginTop:'10px'}}>
                <Typography style={{color:'#ef5350'}}>Source Code :</Typography>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://github.com/JyothsnaVellampalli/connect_fe')}>
                    Frontend</Button>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://github.com/JyothsnaVellampalli/connect_be')}>
                    Backend</Button>
            </Box>

            <Box sx={{display:'flex', justifyContent: 'space-between', marginTop:'10px'}}>
                <Typography style={{color:'#ef5350'}}>Deployed Site :</Typography>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://social-connect-app.netlify.app/')}>
                    Frontend</Button>
                <Button variant='outlined' size='small' onClick={()=>Openlink('https://connectexpress.herokuapp.com/')}>
                    Backend</Button>
            </Box>
        </CardContent>
        </Card>
    )
}
