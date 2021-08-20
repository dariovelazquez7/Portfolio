import "./Home.css"
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "../../img/mylogo.png"
import { Box } from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar"






const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: "center",
      minHeight:"100vh",
    },
    // drawer: {
    //   width: drawerWidth,
    //   flexShrink: 0,
      
    // },
    // drawerPaper: {
    //   width: drawerWidth,
    //   minHeight:"100vh",
    //   backgroundColor:"black",
      
    //   display: 'flex',
    //   justifyContent: "center",
    // },
    
    
    content: {
     
      padding: theme.spacing(1),
      textAlign: "initial",
      marginLeft: "70px",
      fontFamily: "monospace" 
    },
    
    h33:{
      fontFamily: "monospace",
      fontSize: "2.8rem"
    },
    logo2:{
      width:"80px",
      height:"80px",
      borderRadius: "50%",
      boxShadow: "0 0 10px 3px #00C2CB",
    }
  }),
);



function Home():JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
     
        <Box component="span" style={{position:"absolute", top: "0", justifySelf:"center", marginLeft:"20px", marginTop: "20px"}}>
        <img src={logo} alt="Dario velazquez" className={classes.logo2}/>
        </Box>      
        <Sidebar/>
      
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