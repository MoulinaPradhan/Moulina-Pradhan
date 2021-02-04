import React,{useState} from 'react'
import {REACT_APP_EMAILJS_RECEIVER,REACT_APP_EMAILJS_USERID,} from 'emailjs-com'
import ReactContactForm from 'react-mail-form';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextareaAutosize, Grid,TextField, Box,Link,CardContent,Typography,Divider,Container,Card,Button} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
        margin: theme.spacing(1)
      }

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
        className={classes.cardContainer}
        maxWidth="sm"
      >
        
        {/* <Box
          mb={8}
          display="flex"
          justifyContent="center"
        >
         
        </Box> */}
        <Card className="login">
          <CardContent className={classes.cardContent}>
            {/* <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mb={1}
            > */}
              {/* use only demo */}

              <form
          noValidate
          onSubmit={sendEmail}
        
        >
          <TextField
          
            fullWidth
            autoFocus
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