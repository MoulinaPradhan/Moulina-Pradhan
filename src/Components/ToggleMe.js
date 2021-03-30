import React, {useRef} from 'react';
import { makeStyles, withStyles,createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useOnClickOutside from 'use-onclickoutside'
import Badge from '@material-ui/core/Badge';



const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme
const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  
  },
}))(Avatar);

const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    // flexGrow: 1,
  },
  demo:{
      backgroundColor:'red',
    height:100,
    width:100
  },
  LinkedIn:{
    position:"fixed",
      zIndex:1,
      top:'380px',
      left:'100px',
      boxShadow: `1px 0px 20px 2px #000000f2;`,
      [breakpoints.down("xs")]: {
        left:'-10px',
        top:'340px'
      },
  },
  fab: {
    margin: theme.spacing(2),
  },
  Main: {
      top:'300px',
      left:'120px',
     
      [breakpoints.down("xs")]: {
        left:'10px'
      },
  },
  GitHub:{
      top:'180px',
      
      left:'100px',
      boxShadow: `1px 0px 20px 2px #000000f2;`,
      [breakpoints.down("xs")]: {
        left:'56px',
        top:'242px'
      },
  },
  Leetcode:{
    position:"fixed",
    zIndex:1,
    top:'280px',
    left:'2px',
    boxShadow: `1px 0px 20px 2px #000000f2;`,
  
    [breakpoints.down("xs")]: {
      left:'-10px',
      top:'215px'
    },
},
  Gfg:{
    position:"fixed",
    zIndex:1,
    top:'280px',
    left:'200px',
    boxShadow: `1px 0px 20px 2px #000000f2;`,
    [breakpoints.down("xs")]: {
      left:'55px',
      top:'310px'
    },
},
avatar:{
  height:50,
  width:50,
  border:'4px solid white',
  boxShadow: `1px 0px 20px 2px #000000f2;`,
  [breakpoints.down("xs")]: {
    height:40,
    width:40
  },
}
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

export default function ToggleMe() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

const ref= useRef();

 const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
   
  };

useOnClickOutside(ref, () => setOpen(false));

  const handleClose = (e) => {
    // setOpen(false);
    e.stopPropagation();
  };

  return (
 <div>
  
   <Tooltip title="Click Me" className={classes.Main} aria-label="add" style={{position:'fixed',zIndex:1,outline:'none'}} onClick={handleOpen}>
        
         {/* <Avatar className={classes.avatar} alt="Moulina Pradhan" src="https://lh3.googleusercontent.com/pUBy8uKKiAkqxJ0zUnWP3j9Ehe5hdDxBoe_RArnKHlq0eAECnA5AQEGGJSkI5mEb0idm=s85" /> */}
 
         <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<SmallAvatar alt="Remy Sharp" src="data:image/png;base64,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" />}
      >
        <Avatar alt="more info" className={classes.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoYeCTlCn7ZDJchBE-5IBUUVYcwn2VFfjMA&usqp=CAU" />
      </Badge>

      </Tooltip>

     

      { open ? <div ref={ref}>
      <Link href="https://github.com/MoulinaPradhan" target="_blank">
      <Tooltip title="GitHub" aria-label="GitHub" className={classes.GitHub}  style={{position:'fixed',zIndex:1,outline:'none',boxShadow:"0px 0px black"}} onClick={handleClose}>
           <Fab color="secondary" className={classes.fab}>
           <GitHubIcon />
           </Fab>
         </Tooltip>
         </Link>
         <Link href="https://www.linkedin.com/in/moulina-pradhan-3729821a1/" target="_blank">
         <Tooltip title="LinkedIn" aria-label="LinkedIn" className={classes.LinkedIn} style={{position:'fixed',zIndex:1,outline:'none'}}>
           <Fab color="secondary" className={classes.fab}>
           <LinkedInIcon />
           </Fab>
         </Tooltip>
         </Link>
         <Link href="https://auth.geeksforgeeks.org/user/aniluom/practice/" target="_blank">
         <Tooltip title="GfG" aria-label="GfG" className={classes.Gfg} style={{position:'fixed',zIndex:1,outline:'none'}}>
           <Fab color="primary" className={classes.fab}>
           <Avatar alt="GeeksForGeeeks" src="https://img.icons8.com/color/452/GeeksforGeeks.png" />
           </Fab>
         </Tooltip>
         </Link>
         <Link href="https://leetcode.com/aniloum_22/" target="_blank">
         <Tooltip title="LeetCode" aria-label="LeetCode" className={classes.Leetcode} style={{position:'fixed',zIndex:1,outline:'none'}}>
           <Fab color="primary" className={classes.fab}>
           <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" />
           </Fab>
         </Tooltip>
         </Link>
         </div>
      :null}
   
    </div>
  );
}
