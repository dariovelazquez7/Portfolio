import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



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
})
)
  
  

function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           
            <main className={classes.content}>
          <section>
          <Typography variant="h3" className={classes.h33}>
              Acá van mis proyectos
          </Typography>
          </section>
          </main>
        </div>
    )
}

export default Projects
