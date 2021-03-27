import React, {useState} from 'react'
import FlipCard from 'flip-card-react';
import {Row,Col,Image} from 'react-bootstrap';
import { Card, CardHeader,ImageHeader, CardBody, CardFooter } from 'react-simple-card'; 
import {Avatar,Typography,List,Divider,ListItem,ListItemText,Link ,Grid,createMuiTheme,Box,Container,CardActions,CardMedia,CardContent,Button,CardActionArea} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import ElectroBuzz from '../videos/ElectroBuzz.mp4'
import HoverVideoPlayer from 'react-hover-video-player';
import Tilt from 'react-parallax-tilt';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {  maxWidth: 400,
      
      height:500,
  },
    Links:{
   textDecoration:'none',
   fontWeight:900,
'&:hover': {
  textDecoration:'none',
  color: 'transparent',
   textShadow: '0 0 5px rgba(0,0,0,0.5)'
},
    },
    backward:{

      display: "flex",
      height:500,
      backgroundColor:"#EE3B3B",
      '&:hover': {
        backgroundColor:"#8E2323"
      },
    },
    heading: {
      fontSize:50,
      textAlign:"center",
      [breakpoints.down("xs")]: {
        fontSize: "1rem"
      },
      fontFamily: 'Raleway',
      fontStyle: 'normal',
      fontDisplay: 'swap',
     textAlign:'center'
    },
    boxWidth:{
        width:'100%',
        height:'1rem',
        marginTop:'48rem',
        [breakpoints.down("xs")]: {
            marginTop: "15rem"
          },
    },
    title:{
fontSize:80
    },
    listAlign:{
textAlign:"center"
    },
    media: {
      height: 200,
      width:'100%',
    },
 GitLogo:{
   width:'100px',
   height:'100px',
   marginBottom:'10px'
   
 },
 projectView:{
fontFamily:"Apple Color Emoji",
textShadow:'4px 0px 1px black',
color: "#FFFFFF",
fontSize:'2.5rem',
fontWeight:900,
 },
    floatingText:{
        position:"absolute"
    }
  }),
);

const ElectroBuzzProject = () => {
    const classes=useStyles();
    const [isFlipped, setFlipped] = useState(false);

    const front = (
        <div onClick={() => setFlipped(x => !x)}>
      
        <Card className={classes.root}>
        <CardActionArea>
        <HoverVideoPlayer 
        className="player-wrapper"
        style={{
          height:'200px',
          display:isFlipped ? 'none' : ''
        }}
        videoSrc={ElectroBuzz}
        pausedOverlay={
          <img src="thumbnail-image.jpg" alt="" />
        }
        loadingOverlay={
          <div className="loading-spinner-overlay" />
        }
      />
   
         
   <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          ElectroBuzz
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          An online e-commerce site for electronic appliances 👩‍💻  using MERN.
          Used Paypal for payment integeration. Deployed using Heroku. 
          </Typography>
        </CardContent>
        </CardActionArea>
        <List component="nav">
      <ListItem button >
      <Divider />
        <ListItemText  primary="MERN" className={classes.listAlign}/>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Redux" className={classes.listAlign}/>
      </ListItem>
      <ListItem button>
        <ListItemText primary="PayPal Gateway" className={classes.listAlign} />
      </ListItem>
    
    
    </List>

      </Card>
     
      </div>
      );
   
      const back = (
        <div onClick={() => setFlipped(x => !x)} >
        <Card className={classes.root}>
        <CardActionArea >
  <CardContent className={classes.backward} >
 
  <Grid container justify="center" alignItems="center" direction="column">
  <Tooltip title="Source Code" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
  <Grid item justifyContent="center"> 
   <Link target="_blank" href="https://github.com/MoulinaPradhan/ElectroBuzz"> <Avatar className={classes.GitLogo} src="https://www.flaticon.com/svg/vstatic/svg/2111/2111432.svg?token=exp=1616867980~hmac=0494e5ba09a58a94b61df219854a60c4"/> 
   </Link>
</Grid>
</Tooltip>
<Grid item>
<Link className={classes.Links} href="https://electrobuzz.herokuapp.com/" target="_blank" ><Typography  className={classes.projectView}>
   Visit Site
      </Typography>
      </Link>
</Grid>
</Grid>
 </CardContent>
        </CardActionArea>
        <CardActions>
      
  </CardActions>
      </Card>
          </div>
      );
  {/* */}
    return (
        <div>
            <FlipCard isFlipped={isFlipped} front={front} back={back}/>  
        </div>
    )
}

export default ElectroBuzzProject
