import React from 'react';
import { makeStyles,createMuiTheme , withStyles } from '@material-ui/core/styles';
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
import {Link, Avatar,List,ListItem,ListItemAvatar,ListItemText,Badge} from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#99004d',
      color: '#99004d',
      marginRight:10,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);

export default function Experiences() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
      <div  className={classes.startingPosition} id="education">
           <h2 className={classes.heading}>
<Random
  text="Experiences"
 effect="pop"
  effectDirection="up"
  effectChange={0.6}
/>
</h2>
    <Timeline align="alternate">
      <TimelineItem>
       
        <TimelineSeparator>
          <TimelineDot>
          <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" className={classes.large} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          <Link  target="_blank" href="https://hithaldia.in/main/" color="inherit">
            <Typography variant="h6" component="h1"  color="primary" >
           Bipolar Factory
            </Typography>
            </Link>
            <Typography variant="body2">September(2020) - November(2020) </Typography><br/>
            
            <List >
            <ListItem>
               <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
         </StyledBadge>
                   
                  <ListItemText
                    primary="Worked on a real life project named Telacoach"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>

                <ListItem>
               <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
         </StyledBadge>
                   
                  <ListItemText
                    primary="Worked on a react project with TypeScript"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                
                <ListItem>
               <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
         </StyledBadge>
                   
                  <ListItemText
                    primary="Learn how to write clean code with proper folder structure."
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
               <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
         </StyledBadge>
                   
                  <ListItemText
                    primary="Learn to make Api and lerant to use Postman and lerant git command"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
           
                <ListItem>
               <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
         </StyledBadge>
                   
                  <ListItemText
                    primary="Learnt to work in a team, had experience with morning scrum."
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
           
             </List>


          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        
        <TimelineSeparator>
          <TimelineDot>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhfu3iw_XfKM0luLnG7GtoZBAnjiyQezSew&usqp=CAU" className={classes.large} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          <Link  target="_blank" href="https://haldiaioc.kvs.ac.in/" color="inherit">
            <Typography variant="h6" component="h1"  color="primary" >
            SAWO Labs Future of UX Hackathon  
            </Typography>
            </Link>
            <Typography variant="body2">January(2020) - February(2020) </Typography><br/>
            <Typography  textAlign="right">
                
                I was a student of Kendriya Vidyalaya I.O.C Haldia.I was also the school's captain for the session (2018-19).
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