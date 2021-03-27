import React from 'react'
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import {LinkContainer} from 'react-router-bootstrap'
import {Nav,Navbar,Container} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Portfolio from './MoulinaPradhan.pdf'
const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    borderRadius:"1%",
    backgroundImage: `url(https://image.freepik.com/free-photo/crumpled-paper-background_1373-412.jpg)`
  },
  downloadButton:{
color:"white",
fontWeight:900,
fontSize:'1.45rem'
  },
 Links:{
fontSize:20,
color:"white"
 },
  startingPosition:{
      marginTop:'-45%',
  }
}));

const Header = () => {
  const classes = useStyles();
    return (
        <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect fixed="top">
          
  <Navbar.Brand> 
    <a href={Portfolio} className={classes.downloadButton} download>Resume <i class="fa fa-download"></i></a>
    </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <AnchorLink href='#about'>
      <Nav.Link className={classes.Links}>About Me</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#skills'>
      <Nav.Link className={classes.Links}>Skills</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#experiences'>
      <Nav.Link className={classes.Links}>Experiences</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#projects'>
      <Nav.Link className={classes.Links}>Projects</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#education'>
      <Nav.Link className={classes.Links}>Education</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#contact'>
      <Nav.Link className={classes.Links}>Contact</Nav.Link>
      </AnchorLink>
     
   
   
   
   
   
    </Nav>
   
  </Navbar.Collapse>
 
</Navbar>    
        </header>
    )
}

export default Header