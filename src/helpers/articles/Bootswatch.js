import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tilt from 'react-parallax-tilt';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    '&:hover': {
        background: "#f00",
        cursor:'pointer'
     },
  },
  cardHover:{
    //   border:'4px solid green',
    //   boxShadow: '0px 0px 7px 8px bisque',
    '&:hover': {
      border:'2px solid white',
        cursor:'pointer',
        boxShadow: '0px 0px 24px 5px #2F4F4F',
     },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    border:' 2px solid green'
  },
}));

export default function BootsWatch() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <>
      <Tilt>
      <Link href="https://www.geeksforgeeks.org/how-to-add-theme-to-your-webpage-using-bootswatch-in-reactjs-project/" >
    <Card className={classes.cardHover}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png">
           
          </Avatar>
        }
    
        title="Bootswatch in ReactJS project ?"
        subheader="February 10, 2021"
      />
      <CardMedia
        className={classes.media}
        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
        title="React Developer Tools"
      />
    </Card>
    </Link>
    </Tilt>
    </>
  );
}
