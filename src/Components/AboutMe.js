import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap';
import Moulina from "../Images/moulina.jpeg"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Typography,Grid,createMuiTheme,Box} from '@material-ui/core';


const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    body: {
      fontSize:30,
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
 
    return (
       <Container className={classes.spacer}>

<Row className="justify-content-md-center">
<Col xs={5} md={4}>
            
  <Box  display="flex"
        alignItems="center"
        p={1}
        m={1}>
            <Box>
         
             <Image mt={80} src={Moulina} rounded alt="Moulina Pradhan" fluid />
            
             </Box>
              
             </Box>
           
              </Col> 
             
              <Col xs={6} md={6}>
                 <Box  
                 display="flex"
                 alignItems="center"
                 p={1}
                 className={classes.heading}
                >
            <Box>
              <Typography className={classes.body}>Hi <br/>
              My name is <span className={classes.spanText}>Moulina Pradhan</span>, I'm a <span className={classes.spanText}>second</span> year student, persuing <span className={classes.spanText}>B.Tech </span>in <span className={classes.spanText}>Information Technology</span> from <span className={classes.spanText}>Haldia Institute of Technology</span>              
              </Typography>
              </Box>
              </Box>
                  </Col> 
            </Row>
        </Container>
    )
}

export default AboutMe
