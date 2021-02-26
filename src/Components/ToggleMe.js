import React, {useRef} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
      left:'100px'
  },
  fab: {
    margin: theme.spacing(2),
  },
  Main: {
      top:'300px',
      left:'120px'
  },
  GitHub:{
      top:'170px',
      left:'100px',
      outline:'none'
  },
  Leetcode:{
    position:"fixed",
    zIndex:1,
    top:'280px',
    left:'2px'
},
  Gfg:{
    position:"fixed",
    zIndex:1,
    top:'280px',
    left:'200px'
},
avatar:{
  height:50,
  width:50,
  border:'4px solid white'
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
        badgeContent={<SmallAvatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/pUBy8uKKiAkqxJ0zUnWP3j9Ehe5hdDxBoe_RArnKHlq0eAECnA5AQEGGJSkI5mEb0idm=s85" />}
      >
        <Avatar alt="more info" className={classes.avatar} src="https://www.flaticon.com/svg/vstatic/svg/943/943492.svg?token=exp=1614363002~hmac=77dc4ef26b73454f901dad09f2889f2b" />
      </Badge>

      </Tooltip>

     

      { open ? <div ref={ref}>
      <Link href="https://github.com/MoulinaPradhan" target="_blank">
      <Tooltip title="GitHub" aria-label="GitHub" className={classes.GitHub}  style={{position:'fixed',zIndex:1,outline:'none'}} onClick={handleClose}>
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
