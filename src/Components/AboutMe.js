import React from 'react'
import Moulina from "../Images/moulina.jpeg"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Typography,Paper,Grid,createMuiTheme,Box, Container} from '@material-ui/core';
import TextTransition, { presets } from "react-text-transition";
import Typewriter from 'typewriter-effect';
import ToggleMe from './ToggleMe'
import RellaxWrapper from 'react-rellax-wrapper'
import {Helmet} from "react-helmet";


const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    body: {
      fontSize:28,
      [breakpoints.down("xs")]: {
        fontSize: "1rem"
      },
      fontFamily: 'Raleway',
      fontStyle: 'normal',
  fontDisplay: 'swap',
     textAlign:'center'
    },
    spanText:{
        color:'violet'
    },
 spacer:{
marginTop:'5%',
[breakpoints.down("xs")]: {
  marginTop: "10%"
},
    },
    heading:{
        marginTop:"5rem",
        [breakpoints.down("xs")]: {
            marginTop: "1rem"
        },    
    }
  }),
);

const AboutMe = () => {
    const classes = useStyles();

    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
      );
    }, []);
  
 
    return (
   <>
   
<Container id="about" className={classes.spacer}>
    <Grid container justify="flex-end" >
          <Grid item md={9} xs={12}>
          <Typography className={classes.body}>Hi <br/>
              My name is <span className={classes.spanText}>Moulina Pradhan</span>, I'm a <span className={classes.spanText}>second</span> year student, persuing <span className={classes.spanText}>B.Tech </span>in <span className={classes.spanText}>Information Technology</span> from <span className={classes.spanText}>Haldia Institute of Technology.</span>  <br/>            
              I have worked as a  <span className={classes.spanText}>Frontend (React.js) Developer intern</span>  for more than  <span className={classes.spanText}>2.5 months</span>.<br/>
              I have solved around  <span className={classes.spanText}> 160+</span> questions at  <span className={classes.spanText}>GeeksForGeeks</span> and  around  <span className={classes.spanText}>160+ </span>questions on  <span className={classes.spanText}> Leetecode</span>.
              I love sharing my knowledge so I also contribute<span className={classes.spanText}> articles</span> on <span className={classes.spanText}>GeeksForGeeks.</span>
               </Typography>
          </Grid>
          </Grid> 
    
    {/* <h2 align="center">
  <Typewriter
  options={{
    strings: ['A Learner', 'MERN Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
</h2> */}
  
            
    
</Container>
   </>
       
    )
}

export default AboutMe
