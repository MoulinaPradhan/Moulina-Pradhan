import React from 'react';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Wave,Random } from 'react-animated-text';
import {Link, Avatar} from '@material-ui/core'

const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  heading: {
    fontSize:50,
    [breakpoints.down("xs")]: {
      fontSize: "1rem"
    },
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap',
   textAlign:'center'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  startingPosition:{
      marginTop:'40%'
  }
}));

export default function Education() {
  const classes = useStyles();

  return (
      <div  className={classes.startingPosition} id="education">
           <h2 className={classes.heading}>
<Random
  text="Education"
 effect="pop"
  effectDirection="up"
  effectChange={0.6}
/>
</h2>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
           2019-2023
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <Avatar alt="Remy Sharp" src="https://images.static-collegedunia.com/public/college_data/images/logos/1488782357f3.jpg" className={classes.large} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          <Link  target="_blank" href="https://hithaldia.in/main/" color="inherit">
            <Typography variant="h6" component="h1"  color="primary" >
            Haldia Institute of Technology
            </Typography>
            </Link>
            <Typography variant="body2"><LocationOnTwoToneIcon/>Haldia Township, West Bengal</Typography><br/>
            <Typography>I'm an undergraduate student at Haldia Institute of Technology. 
                I am currently Pursuing Bachelor of Technology in Information Technology.</Typography>
                <br/>
                Graduated 1st year with aggregate of 8.74 GPA(Here)
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
           2007-2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <Avatar alt="Remy Sharp" src="https://www.schoolmykids.com/wp-content/uploads/2017/07/kvslogo1.jpg" className={classes.large} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          <Link  target="_blank" href="https://haldiaioc.kvs.ac.in/" color="inherit">
            <Typography variant="h6" component="h1"  color="primary" >
            Kendriya Vidyalaya I.O.C Haldia
            </Typography>
            </Link>
            <Typography variant="body2"><LocationOnTwoToneIcon/>Haldia Township, West Bengal</Typography><br/>
            <Typography  textAlign="right">I was a student of Kendriya Vidyalaya I.O.C Haldia.I was also the school's captain for the session (2018-19).
                Apart from Academics I used to take part in various co-curricular activities like painting, singing etc.
                I also clerified as a Rajya Purashkar guide, in the session(2017-18).
            </Typography>
                <br/>
                AISSCE(2019): 86 % <br/>
                Assce(2017) : 10 CGPA

          </Paper>
        </TimelineContent>
      </TimelineItem>
     
    </Timeline>
    </div>
  );
}