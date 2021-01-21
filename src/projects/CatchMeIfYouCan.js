import React, {useState} from 'react'
import FlipCard from 'flip-card-react';
import {Row,Col,Image} from 'react-bootstrap';
import { Card, CardHeader,ImageHeader, CardBody, CardFooter } from 'react-simple-card'; 
import {Typography,Link ,Grid,createMuiTheme,Box,Container,CardActions,CardMedia,CardContent,Button,CardActionArea} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import CatchMe from '../videos/CatchMe.mp4'
import HoverVideoPlayer from 'react-hover-video-player';
import Tilt from 'react-parallax-tilt';


const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {  maxWidth: 345, height:400},
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
    media: {
      height: 200,
      width:'100%',
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
        <CardActions>
        <Link  target="_blank" href="https://moulinapradhan.github.io/catch_me_sea_version/" color="inherit">
      { "Project Link" }
    </Link>
  
    <Link  target="_blank" href="https://moulinapradhan.github.io/catch_me_sea_version/" color="inherit">
      { "Github" }
    </Link>
         
        </CardActions>
      </Card>
     
      </div>
      );
   
      const back = (
          <div onClick={() => setFlipped(x => !x)}>
            <Card className={classes.root}>
        <CardActionArea>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
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
