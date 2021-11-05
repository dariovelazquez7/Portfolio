import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import home from "../../img/home.png"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: "center",
      minHeight:"100vh",
      [theme.breakpoints.down("xs")]:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center"
      }
    },
    content: {  
      // padding: theme.spacing(1),
      textAlign: "initial",
      fontSize: "50px"
    },
    
    typography:{
      fontFamily: "monospace",
      [theme.breakpoints.down("xs")]:{
        fontSize: "27px"
      }
    },
    subtitle:{
      fontFamily: "monospace",
      [theme.breakpoints.down("xs")]:{
        fontSize: "15px"
      }
    },
    subtitle2:{
      fontFamily: "monospace",
      color:"gray", 
      fontSize:"18px",
      [theme.breakpoints.down("xs")]:{
        fontSize: "14px"
      }
    },
    
    photo:{
    width: "450px",
    marginLeft: "60px",
    
    [theme.breakpoints.down("sm")]:{
      display: 'flex',
      flexDirection: "column",
      width: "250px",
      height: "200px",
      marginLeft: 0,
    }
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
        <Typography variant="h3" className={classes.typography}>
          Hola,
        </Typography>
        <Typography variant="h3" className={classes.typography}>
          soy Dario,
        </Typography>
        <Typography variant="h3" className={classes.typography} style={{color:"#198CD8"}}>
          Full Stack Developer.
        </Typography>
        <Typography variant="h6" className={classes.subtitle} style={{ marginTop:"20px"}}>
        ✅ Constante aprendizaje. {<br/>}
        ✅ Trabajo en equipo. {<br/>}
        ✅ Soluciones.
        </Typography>
        <Typography variant="overline" className={classes.subtitle2} > 
        Bienvenidos a mi portfolio
        </Typography>
        </section>
      </main>
        <div >
          <img src={home} alt="Dario velazquez" className={classes.photo}/> 

        </div>
    </div>
  );
}






export default Home