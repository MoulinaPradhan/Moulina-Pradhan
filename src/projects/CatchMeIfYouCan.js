import React, {useState} from 'react'
import FlipCard from 'flip-card-react';
import {Row,Col,Image} from 'react-bootstrap';
import { Card, CardHeader,ImageHeader, CardBody, CardFooter } from 'react-simple-card'; 
import {Avatar,Typography,List,Divider,ListItem,ListItemText,Link ,Grid,createMuiTheme,Box,Container,CardActions,CardMedia,CardContent,Button,CardActionArea} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import CatchMe from '../videos/CatchMe.mp4'
import HoverVideoPlayer from 'react-hover-video-player';
import Tilt from 'react-parallax-tilt';


const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {  maxWidth: 400,
      
      height:500,
  },
    Links:{
textDecoration:'none',
'&:hover': {
  textDecoration:'none',
  color: 'transparent',
   textShadow: '0 0 5px rgba(0,0,0,0.5)'
},
    },
    backward:{
      // maxWidth: 400,
      display: "flex",
      height:500,
      backgroundColor:"#C324EE",
      '&:hover': {
        backgroundColor:"#B936DC"
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
fontWeight:900,
color: "#FFFFFF",
fontSize:'2.5rem'
 },
    floatingText:{
        position:"absolute"
    }
  }),
);

const CatchMeIfYouCan = () => {
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
        videoSrc={CatchMe}
        pausedOverlay={
          <img src="thumbnail-image.jpg" alt="" />
        }
        loadingOverlay={
          <div className="loading-spinner-overlay" />
        }
      />
   
         
   <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Catch Me
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A simple pet project 😀made to see if one can catch the jelly fish🦑 under the sea. HTML,CSS and JavaScript has been used.
          </Typography>
        </CardContent>
        </CardActionArea>
        <List component="nav">
      <ListItem button >
      <Divider />
        <ListItemText  primary="HTML" className={classes.listAlign}/>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="CSS" className={classes.listAlign}/>
      </ListItem>
      <ListItem button>
        <ListItemText primary="JavaScript" className={classes.listAlign} />
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


    <Grid item justifyContent="center"> 
   <Link target="_blank" href="https://github.com/MoulinaPradhan/catch_me_sea_version"> <Avatar className={classes.GitLogo} src="https://www.flaticon.com/svg/vstatic/svg/2111/2111432.svg?token=exp=1616867980~hmac=0494e5ba09a58a94b61df219854a60c4"/> 
   </Link>
</Grid>
<Grid item>
<Link className={classes.Links} href="https://moulinapradhan.github.io/catch_me_sea_version/" target="_blank" ><Typography  className={classes.projectView}>
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

export default CatchMeIfYouCan
