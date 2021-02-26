import React from 'react'

import ReactContactForm from 'react-mail-form';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextareaAutosize, Grid,TextField, Box,Link,CardContent,Typography,Divider,Container,Card,Button} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
  },
  textField:{
    width:'100%',
    height:'500%',
    color:'red'
  },
  background:{
    backgroundColor:'lightgreen'
    ,padding: theme.spacing(3),
  },
  textarea: {
    resize: "both"
  },
  cardContent:{
    // backgroundColor:'red',
    backgroundImage:'https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg'
  }
}));

export default function ContactMeForm() {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hye557c', 'template_cw4rzyn', e.target, 'user_QsAWWOgOIJWurzAsRI3Je')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }

  return (
    <>
      <Container
        className={classes.root}
        maxWidth="sm"
      >
        <Card className="login" style={{backgroundImage:"https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg"}}>
          <CardContent className={classes.cardContent}>
              <form
          noValidate
          onSubmit={sendEmail}
        
        >
          <TextField
          
            fullWidth
          id="name"
            label="Name"
            margin="normal"
            name="name"
          
            variant="outlined"
          />
           <TextField
           
           fullWidth
        
           label="Subject"
           margin="normal"
           name="subject"
           id="subject"
           variant="outlined"
         />
          <TextField
          className={classes.textarea}
            fullWidth
            rows={2}
            rowsMax={4}
            label="Message"
            margin="normal"
            name="message"
        
     
           id="message"
      
            variant="outlined"
          />
          {/* {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>
                {errors.submit}
              </FormHelperText>
            </Box>
          )} */}
          <Box mt={2}>
            <Button
              color="secondary"
             
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              value="Create Email"
            >
              Send
            </Button>
          </Box>
          {/* <Box mt={2}>
            <Alert
              severity="info"
            >
              <div>
                Use
                {' '}
                <b>demo@telacoach.com</b>
                {' '}
                and password
                {' '}
                <b>Password123</b>
              </div>
            </Alert>
          </Box> */}
        </form>
            {/* </Box> */}
           
            <Divider />
     
            <Box my={1} display="flex" justifyContent="center" >
              <Typography color="textSecondary">
            Don't have an account yet?&nbsp;
        
            </Typography>
            </Box>
          </CardContent>
        </Card>
       
      </Container>
    </>
  );
}