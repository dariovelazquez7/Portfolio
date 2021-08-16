import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';

const drawerWidth = 150;
const minAltura= 900

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: "center",
      minHeight:minAltura,
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
    drawerPaper: {
      width: drawerWidth,
    },
    lista:{
        display: 'flex',
        justifyContent: "center",
        flexDirection: "column",
        minHeight:minAltura,
        
        
    },
    content: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(1),
      textAlign: "initial",
      marginLeft: "70px"
    },
    text:{
        marginLeft:"7px"
    }
  }),
);

function Home():JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div />
       
        <List className={classes.lista}>
          
            <ListItem button>
               <HomeIcon/>
              <ListItemText primary={" Home"} className={classes.text}/>
            </ListItem>
            <ListItem button>
               <EmailIcon/>
              <ListItemText primary={" Contact"} className={classes.text}/>
            </ListItem>
            <ListItem button>
               <AppsIcon/>
              <ListItemText primary={" Projects"} className={classes.text}/>
            </ListItem>
            <ListItem button>
               <PersonIcon/>
              <ListItemText primary={" About Me"} className={classes.text}/>
            </ListItem>
        </List>
        
        
      </Drawer>
      <main className={classes.content}>
        <div />
        <Typography variant="h3" >
          Hola!,
        </Typography>
        <Typography variant="h3" >
          soy Dario,
        </Typography>
        <Typography variant="h3" >
          full stack developer.
        </Typography>
        <Typography variant="overline">
          Bienvenidos a mi portfolio
        </Typography>
        
      </main>
    </div>
  );
}






export default Home