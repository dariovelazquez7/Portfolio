import "./Home.css"
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "../../img/mylogo.png"



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: "center",
      minHeight:"100vh",
    },
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
    
  }),
);



function Home():JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />    
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
        <div className="logo">
          {/* <img src={logo} alt="Dario velazquez" className="logo"/> */}
          <div className="alpha" id="alpha1">D</div>
          <div className="aplha" id="alpha2">D</div>
        </div>
    </div>
  );
}






export default Home