import React,{useState} from 'react'
import {REACT_APP_EMAILJS_RECEIVER,REACT_APP_EMAILJS_USERID,} from 'emailjs-com'
import ReactContactForm from 'react-mail-form';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid,TextField, Box} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import emailjs from 'emailjs-com';
import ContactMeForm from './ContactMeForm';
import Wave from 'react-wavify'
import Snow from 'react-snow-effect'
import ToggleAbout from '../helpers/ToggleAbout';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(3),
  },
  textField:{
    width:'100%',
    height:'500%',
    color:'red'
  },
  background:{
    // backgroundColor:'black',
    backgroundImage:'https://codemyui.com/wp-content/uploads/2019/06/Shooting-Star-Background-in-Pure-CSS-1.gif',
    padding: theme.spacing(3),
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
     
      <Grid container className={classes.background}>
      {/* <Snow/> */}
     
      <Grid md={12}>
       <h3> Contact Me</h3> 
         </Grid>   
     <ContactMeForm/>
     <Box display="flex" flexDirection="row-reverse">
        <Box>
 <ToggleAbout/>
   </Box>
   </Box>
    
      </Grid>
     
      <Wave mask="url(#mask)" fill="#1277b0" options={{
          height: 20,
          amplitude: 50,
          speed: 0.18,
          points: 5
        }} >
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0" stopColor="white" />
      <stop offset="0.5" stopColor="black" />
    </linearGradient>
    <mask id="mask">
      <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)"  />
    </mask>
  </defs>
</Wave>
    </div>
  );
}