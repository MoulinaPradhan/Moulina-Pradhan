import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    // flexGrow: 1,
  },
  demo:{
      backgroundColor:'red',
    //   marginLeft:'80px',
    //   position:"relative",
    //   marginTop:'150px',
    //   top:"190px"
    height:100,
    width:100
  },
  LinkedIn:{
    position:"fixed",
      zIndex:1,
      top:'330px',
      left:'100px'
  },
  fab: {
    margin: theme.spacing(2),
  },
  Main: {
      top:'240px',
      left:'100px'
  },
  GitHub:{
      top:'150px',
      left:'100px',
      outline:'none'
  },
  Leetcode:{
    position:"fixed",
    zIndex:1,
    top:'240px',
    left:'2px'
},
  Gfg:{
    position:"fixed",
    zIndex:1,
    top:'240px',
    left:'200px'
}
}));


export default function ToggleMe() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
 const [uk,setUk] = React.useState(false)

 const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenLong = () => {
    setUk(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
 <div>
  
   <Tooltip title="Click Me" className={classes.Main} aria-label="add" style={{position:'fixed',zIndex:1,outline:'none'}}>
        <Fab color="primary" className={classes.fab}>
          {/* <GitHubIcon /> */}
          <Avatar alt="Remy Sharp" src="https://assets.leetcode.com/users/moulina01/avatar_1608646094.png" />
        </Fab>
      </Tooltip>
   <Link href="https://github.com/MoulinaPradhan" target="_blank">
   <Tooltip title="GitHub" aria-label="GitHub" className={classes.GitHub}  style={{position:'fixed',zIndex:1,outline:'none'}}>
        <Fab color="secondary" className={classes.fab}>
        <GitHubIcon />
        </Fab>
      </Tooltip>
      </Link>
      <Tooltip title="LinkedIn" aria-label="LinkedIn" className={classes.LinkedIn}>
        <Fab color="secondary" className={classes.fab}>
        <LinkedInIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="GfG" aria-label="GfG" className={classes.Gfg}>
        <Fab color="green" className={classes.fab}>
        <Avatar alt="Remy Sharp" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png" />
        </Fab>
      </Tooltip>
      <Tooltip title="LeetCode" aria-label="LeetCode" className={classes.Leetcode}>
        <Fab color="green" className={classes.fab}>
        <Avatar alt="Remy Sharp" src="https://cdn.icon-icons.com/icons2/2389/PNG/512/leetcode_logo_icon_145113.png" />
        </Fab>
      </Tooltip>
    </div>
  );
}
