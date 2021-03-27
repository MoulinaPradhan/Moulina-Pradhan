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
import {BootsWatch, ReactDevTools} from '../helpers/articles'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Wave,Random } from 'react-animated-text';

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
        marginTop:'5rem',
        [breakpoints.down("xs")]: {
            marginTop: "3rem"
          },
    },
    media: {
      height: 200,
      width:'100%',
    },
    startingPosition:{
      marginTop:'80%',
      [breakpoints.down("xs")]: {
        marginTop: "160rem"
      },
  },
    floatingText:{
        position:"absolute"
    }
  }),
);


const Articles = () => {
    const classes=useStyles();
    useEffect(() => {
      Aos.init({
        startEvent: 'someCoolEvent',
        duration: 2000});
      }, [])

    return (
        <>   
        
  <Container fluid data-aos="ease-in" id="articles" className={classes.startingPosition}>
  <h2 align="center">

<Random
  text="Articles"
 effect="pop"
  effectDirection="up"
  effectChange={0.6}
/>
</h2>
<Row className={classes.boxWidth}>
        <Col md={4} xs={12}>
      <ReactDevTools/>
       </Col>
       <Col md={4} xs={12}>
       <BootsWatch/>
         </Col>
        </Row>

        </Container>
       
        </>
    )
}

export default Articles

