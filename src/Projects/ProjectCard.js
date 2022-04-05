import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, Typography, Box} from '@mui/material';
import Markdown from '../Images/markdown.png';
import Commerce from '../Images/eCommerce.png';
import expensetracker from '../Images/expenseTracker.png';

export function MarkdownCard() {
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
                <a href="https://github.com/JyothsnaVellampalli/markdown_fe">Frontend SourceCode</a>
                <a href="https://github.com/JyothsnaVellampalli/markdown_be">Backend SourceCode</a>
            </Box>
        </CardContent>
        
    </Card>
  )
}

export function CommerceCard(){
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
                <a href="https://github.com/JyothsnaVellampalli/webscraping_fe">Frontend SourceCode</a>
                <a href="https://github.com/JyothsnaVellampalli/webscraping_be">Backend SourceCode</a>
            </Box>
        </CardContent>
        </Card>
    )
}

export function ExpenseTracker(){
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
                <a href="https://github.com/JyothsnaVellampalli/expense_tracker_fe">Frontend SourceCode</a>
                <a href="https://github.com/JyothsnaVellampalli/expense_tracker_be">Backend SourceCode</a>
            </Box>
        </CardContent>
        </Card>
    )
}
