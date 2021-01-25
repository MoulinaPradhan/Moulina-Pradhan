import React from 'react'
import {Row,Col,Image} from 'react-bootstrap';
import {Doughnut} from 'react-chartjs-2';
import {Typography,Container,Grid,createMuiTheme,Box} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextTransition, { presets } from "react-text-transition";
import { Wave,Random } from 'react-animated-text';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

import RellaxWrapper from 'react-rellax-wrapper'

const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme

const TEXTS = [
    "Forest",
    "Building",
    "Tree",
    "Color"
  ];
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
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
    boxWidth:{
        width:'100%',
        height:'1rem',
    },
    backYard:{
        backgroundColor:'white'
    },
    floatingText:{
        position:"absolute"
    }
  }),
);


const data = {
  
  labels: [
      'React',
      'Redux',
      'JavaScript',
      'Java',
      'DSA',
      'HTML',
      'CSS',
      'MongoDB',
      'Firebase',
      'Node.js',
      'Express.js'
    ],
    datasets: [{
      data: [100, 50,20,45,23,78,100,78,50,60,43],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
     ' #357EC7',
     '#4AA02C',
     '#FFA62F',
     '#E56717',
     '#F70D1A',
     '#4B0082',
     '#800517',
     '#7FE817'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }
]
  }
const options={
    cutoutPercentage:40 ,
   
}

const Skills = () => {
    const classes=useStyles();
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
      });
    return (
      <RellaxWrapper speed={9} percentage={0.5}  >
        <Container fluid>
          <Row><Col>
        <Box display="flex" justifyContent="center" alignItems="center"fluid >
        <Box className={classes.boxWidth}>
 <h2 className={classes.heading}>
<Random
  text="Skills"
 effect="pop"
  effectDirection="up"
  effectChange={0.6}
/>
</h2>
        
        <Doughnut data={data}  options={options} animateRotate={true}/>     
        </Box>
      
</Box>
</Col></Row>
        </Container>
        </RellaxWrapper>
    )
}

export default Skills

