import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom"
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Box } from "@material-ui/core"; 
import logo from "../../img/mylogo.png"

const colorPrimary = "#00C2CB";
const widthDraw= 200;

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  text:{
    marginLeft:"7px"
},
    lista:{
        display: 'flex',
        justifyContent: "center",
        flexDirection: "column",
        borderRight: "1px solid white",
        backgroundColor:"black",
        color: "white",
        minHeight:"100vh",      
    },
    icon:{
    margin: theme.spacing(1.5, 0),
    "&:focus":{
        color: colorPrimary
    },

},
drawer: {
    width: widthDraw,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: widthDraw,
    minHeight:"100vh",
    backgroundColor:"black",
    
    display: 'flex',
    justifyContent: "center",
  },
  logo2:{
    width:"80px",
    height:"80px",
    borderRadius: "50%",
    boxShadow: "0 0 10px 3px #00C2CB",
  }
})
)

function Sidebar() {
   
    const classes = useStyles();
    return (
        <div>
            <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
          <Box component="span" style={{position:"absolute", top: "0", justifySelf:"center", marginLeft:"20px", marginTop: "20px"}}>
        <img src={logo} alt="Dario velazquez" className={classes.logo2}/>
        </Box>   
            <List className={classes.lista}>
           <Link to="/">
            <ListItem button className={classes.icon}>
               <HomeIcon />
              <ListItemText primary={"Inicio"} className={classes.text}/>
            </ListItem>
            </Link>
            <Link to="/about">
            <ListItem button className={classes.icon}>
               <PersonIcon/>
              <ListItemText primary={"Sobre mi"} className={classes.text}/>
            </ListItem>
            </Link>
            <Link to="/projects">
            <ListItem button className={classes.icon}>
               <AppsIcon/>
              <ListItemText primary={"Proyectos"} className={classes.text}/>
            </ListItem>
           </Link>
           <Link to="contact">
            <ListItem button className={classes.icon}>
               <EmailIcon/>
              <ListItemText primary={"Contacto"} className={classes.text}/>
            </ListItem>
            </Link>
        </List>  
        </Drawer> 
        </div>
    )
}

export default Sidebar
