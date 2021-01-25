import React, {useState,useEffect} from 'react'
import FlipCard from 'flip-card-react';
import {Row,Col,Image} from 'react-bootstrap';
import { Card, CardHeader,ImageHeader, CardBody, CardFooter } from 'react-simple-card'; 
import {Typography,Link ,Grid,createMuiTheme,Box,Container,CardActions,CardMedia,CardContent,Button,CardActionArea} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import demo from '../videos/demo.mp4'
import HoverVideoPlayer from 'react-hover-video-player';
import Tilt from 'react-parallax-tilt';
import { FirebaseEcomerce, CatchMeIfYouCan} from '../projects'
import Aos from 'aos';
import "aos/dist/aos.css";

import RellaxWrapper from 'react-rellax-wrapper'

const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {  maxWidth: 345, height:400,zIndex:10},
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


const Projects = () => {
    const classes=useStyles();
    useEffect(() => {
      Aos.init({
        startEvent: 'someCoolEvent',
        duration: 2000});
      }, [])

    return (
        <>   
        <RellaxWrapper speed={9} percentage={0.8}  >
        <Container fluid data-aos="ease-in" id="projects">
     
        <Row className={classes.boxWidth}>
        <Col md={4} xs={12}>
      <CatchMeIfYouCan/>
       </Col>
       <Col md={4} xs={12}>
       <FirebaseEcomerce/>
         </Col>
        </Row>

        </Container>
        </RellaxWrapper>
        </>
    )
}

export default Projects
