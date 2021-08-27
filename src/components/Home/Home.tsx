import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import foto from "../../img/dario.jpg"
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: "center",
      minHeight:"100vh",
    },
    content: {  
      // padding: theme.spacing(1),
      textAlign: "initial",
      fontSize: "50px"
    },
    
    h33:{
      fontFamily: "monospace",
      
    },
    photo:{
    height: "250px",
    width: "250px",
    marginLeft: "60px",
    boxShadow: "0 0 40px 5px cyan",
    }
  })
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
          <Link to="/form">
        <Button 
        variant="outlined" 
        color="primary" 
        style={{marginTop: "20px", borderRadius: "20px", }}
        startIcon={<EmailIcon />}
        >
          Contactame
        </Button>
        </Link>
        </div>
      </main>
        <div >
          <Avatar src={foto} alt="Dario velazquez" className={classes.photo}/> 
        </div>
    </div>
  );
}






export default Home