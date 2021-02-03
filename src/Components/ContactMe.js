import React,{useState} from 'react'
import {REACT_APP_EMAILJS_RECEIVER,REACT_APP_EMAILJS_USERID,} from 'emailjs-com'
import ReactContactForm from 'react-mail-form';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid,TextField} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  background:{
    backgroundColor:'lightgreen'
    ,padding: theme.spacing(3),
  }
}));

export default function ContactMe() {
  const classes = useStyles();
  ///demo
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className={classes.root}>
       <h1>Contact Me</h1>
      <Grid container className={classes.background}>
      
        <Grid item xs={6} fluid>
        
          <form className={classes.root} noValidate autoComplete="off"  action="mailto:pmoulina76@gmail.com" enctype="multipart/form-data" method="post">
          <Grid>
             <TextField id="subject" name="subject" label="subject" required/>
          </Grid>
         
         <Grid>
           <TextField id="email" name="email" label="Email" required></TextField>
        </Grid> 

        <Grid>
          <TextField id="Message" label="Message" required  name="body" id="body" />

          </Grid>
          
          <div><input type="submit" value="Create Email" class="button is-primary"/></div>
        </form>
        <Mailto email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
    Mail me!
  </Mailto>
        </Grid>
        <Grid item xs={6}>
         <Grid>
           <h1>Get to know more</h1>
         </Grid>
         <Grid>
<MailOutlineIcon/>
<a href="mailto:pmoulina@gmail.com">pmoulina@gmail.com</a>
         </Grid>
        </Grid>
      </Grid>
    </div>
  );
}