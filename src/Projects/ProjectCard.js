import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, Typography} from '@mui/material';
import Markdown from '../Images/markdown.png';
import Commerce from '../Images/eCommerce.png';
import expensetracker from '../Images/expenseTracker.png';

export function MarkdownCard() {
  return (
    <Card>
        
        <CardMedia component='img'  alt='image' image={Markdown} />
        <CardHeader title="Markdown Viewer" style={{color:'#ef5350'}}/>
        <CardContent>
            <Typography variant="body2" color="text.secondary">This is a basic Markdown viewer that displays
             the input code in readable format.
                This project is included with Signup, Verification , Login, Forgot Password pages. 
                Libraries like NodeMailer, bcrypt, react-markdown are used. </Typography>
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
                In this project product details are scraped from different shopping websites.
                 Features like Cart, CheckoutForm, Review page, PaymentForm are added to make it user friendly.
                 libraries like Cheerio, Stripe are included for webScraping and payment Process.
            </Typography>
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
        </CardContent>
        </Card>
    )
}
