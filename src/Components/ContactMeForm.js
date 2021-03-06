import React from 'react'
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import ReactContactForm from 'react-mail-form';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextareaAutosize, Grid,TextField, Box,Link,CardContent,Typography,Divider,Container,Card,Button} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import emailjs from 'emailjs-com';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


const defaultTheme = createMuiTheme({})
  const { breakpoints, typography: { pxToRem } } = defaultTheme
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
    backgroundColor:'#39BD3D',
    padding:theme.spacing(1),
    fontSize:20,
    fontWeight:800,
    fontFamily: "Roboto",
    textAlign:"center",
  color:"white",
    [breakpoints.down("xs")]: {
      fontSize: "1rem",
     
    },

  },
  spanText:{
    fontSize:17,
    color:"#F9FABD"
  },
  textarea: {
    resize: "both"
  },
  cardContent:{
    backgroundImage:'https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg'
  }
}));
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor:"#39BD3D"
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


 

export default function ContactMeForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          id="message"
          label="Message"
          margin="normal"
          name="message"
          fullWidth
          multiline
          rows={4}
         
          variant="outlined"
        />
          <Box mt={2}>
            <Button
              color="secondary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              value="Create Email"
              onClick={handleClickOpen}
            >
              Send
            </Button>

    {/*diaglogue box*/}

    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
       
        <DialogContent dividers>
          <Typography  className={classes.background}>
          Message Sent !<br/>
          <span className={classes.spanText}>Get back to you soon ..</span>
          </Typography>
         
        
        </DialogContent>
     </Dialog>

           {/* */}
          </Box>
        </form>
   <Divider />
     <Box my={1} display="flex" justifyContent="center" >
              <Typography color="textSecondary">
            Or mail to <a href="mailto:pmoulina76@gmail.com">pmoulina76@gmail.com</a>  
        
            </Typography>
            </Box>
          </CardContent>
        </Card>
       
      </Container>
    </>
  );
}