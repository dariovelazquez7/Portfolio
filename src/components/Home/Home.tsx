import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import foto from "../../img/dario.jpg"
import Avatar from '@material-ui/core/Avatar';



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
    boxShadow: "0 0 6px 5px #198CD8",
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
        <Typography variant="h3" className={classes.h33} style={{color:"#198CD8"}}>
          Full Stack Developer.
        </Typography>
        <Typography variant="h6" className={classes.h33} style={{ marginTop:"20px"}}>
        ✅ Constante aprendizaje. {<br/>}
        ✅ Trabajo en equipo. {<br/>}
        ✅ Soluciones.
        </Typography>
        <Typography variant="overline" className={classes.h33} style={{color:"gray", fontSize:"18px"}}> 
        Bienvenidos a mi portfolio
        </Typography>
        </section>
      </main>
        <div >
          {/* <Avatar src={foto} alt="Dario velazquez" className={classes.photo}/>  */}
        </div>
    </div>
  );
}






export default Home