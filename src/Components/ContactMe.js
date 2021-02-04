import React,{useState} from 'react'
import {REACT_APP_EMAILJS_RECEIVER,REACT_APP_EMAILJS_USERID,} from 'emailjs-com'
import ReactContactForm from 'react-mail-form';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid,TextField} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import emailjs from 'emailjs-com';

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

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hye557c', 'template_cw4rzyn', e.target, 'user_QsAWWOgOIJWurzAsRI3Je')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }

  return (
    <div className={classes.root}>
       <h1>Contact Me</h1>
      <Grid container className={classes.background}>
      
        <Grid item xs={6} fluid>
        
          <form className={classes.root} noValidate autoComplete="off" onSubmit={sendEmail}>
          <Grid>
             <TextField id="subject" name="subject" label="subject" required/>
          </Grid>
         
         <Grid>
           <TextField id="name" name="name" label="Email" required></TextField>
        </Grid> 

        <Grid>
     
          <TextField id="message" label="Message" required  name="message" />

          </Grid>
          
          <div><input type="submit" value="Create Email" class="button is-primary"/></div>
        </form>
      
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