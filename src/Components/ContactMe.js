import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid,TextField, Box} from '@material-ui/core';
import '../bubble.css'
import emailjs from 'emailjs-com';
import ContactMeForm from './ContactMeForm';
import Wave from 'react-wavify'
import Snow from 'react-snow-effect'
import ToggleAbout from '../helpers/ToggleAbout';
import {Random } from 'react-animated-text';
import {Helmet} from "react-helmet";
 


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
  },
  startingPosition:{
    marginTop:'0%',
    backgroundImage: `url(https://i0.wp.com/codemyui.com/wp-content/uploads/2019/06/Shooting-Star-Background-in-Pure-CSS-1.gif?fit=880%2C440&ssl=1)`,
    background:'linear-gradient',
    backgroundRepeat:'no-repeat',
    backgroundSize:"cover"
  
}
}));

export default function ContactMe() {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.startingPosition}>
     <h2 className={classes.heading} align="center">

<Random
  text="Contact"
 effect="pop"
  effectDirection="up"
  effectChange={0.6}
/>
</h2>
      <Grid container>

     
      <Grid md={12} className={classes.startingPosition}>
     
      <ContactMeForm/>
  
      
         </Grid>   
    
    
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