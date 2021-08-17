import "./Home.css"
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
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import logo from "../../img/mylogo.png"



const drawerWidth = 150;
const colorPrimary = "#00C2CB"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: "center",
      minHeight:"100vh",
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
        minHeight:"100vh",
        backgroundColor:"black",
        color: "white",
    },
    icon:{
      margin: theme.spacing(1.5, 0),
      "&:focus":{
        color: colorPrimary
      },
    },
    content: {
     
      padding: theme.spacing(1),
      textAlign: "initial",
      marginLeft: "70px",
      fontFamily: "monospace" 
    },
    text:{
        marginLeft:"7px"
    },
    h33:{
      fontFamily: "monospace",
      fontSize: "2.8rem"
    },
    // logo:{
    //   width:"300px",
    //   height:"300px",
    //   marginLeft: "100px",
    //   borderRadius: "50%",
    //   boxShadow: "0 0 10px 3px #00C2CB",
    // }
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

        <List className={classes.lista}>
            <Divider/>
            <ListItem button className={classes.icon}>
               <HomeIcon />
              <ListItemText primary={"Inicio"} className={classes.text}/>
            </ListItem>
            <Divider/>
            <ListItem button className={classes.icon}>
               <PersonIcon/>
              <ListItemText primary={"Sobre mi"} className={classes.text}/>
            </ListItem>
            <Divider/>
            <ListItem button className={classes.icon}>
               <AppsIcon/>
              <ListItemText primary={"Proyectos"} className={classes.text}/>
            </ListItem>
            <Divider/>
            <ListItem button className={classes.icon}>
               <EmailIcon/>
              <ListItemText primary={"Contacto"} className={classes.text}/>
            </ListItem>
            <Divider/>
        </List>   
      </Drawer>
      <main className={classes.content}>
      <section >
        <Typography variant="h3" className={classes.h33}>
          Hola,
        </Typography>
        <Typography variant="h3" className={classes.h33}>
          soy Dario,
        </Typography>
        <Typography variant="h3" className={classes.h33}>
          Full Stack Developer.
        </Typography>
        <Typography variant="overline" style={{color:"gray"}}>
          Bienvenidos a mi portfolio
        </Typography>
        </section>
        <div>
        <Button 
        variant="outlined" 
        color="primary" 
        style={{marginTop: "20px"}}
        startIcon={<EmailIcon />}
        >
          Contactame
        </Button>
        </div>
      </main>
        <div >
          <img src={logo} alt="Dario velazquez" className="logo"/>
        </div>
    </div>
  );
}






export default Home