import React from 'react'
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import {LinkContainer} from 'react-router-bootstrap'
import {Nav,Navbar,Container} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    borderRadius:"1%",
    backgroundImage: `url(https://image.freepik.com/free-photo/crumpled-paper-background_1373-412.jpg)`
  },
 Links:{
fontSize:20,
color:"white"
 },
  startingPosition:{
      marginTop:'-45%',
      // backgroundImage: `url(https://media3.giphy.com/media/aaTz9fnXkzoQ/giphy.gif?cid=ecf05e47ohnjpb3u78kihjqjcx1p46ie2j2gguvny7fh6drq&rid=giphy.gif)`
  }
}));

const Header = () => {
  const classes = useStyles();
    return (
        <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect fixed="top">
          
  {/* <Navbar.Brand>ProShop</Navbar.Brand> */}

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