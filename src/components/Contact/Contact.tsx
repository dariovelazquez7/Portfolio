import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Form from '../Form/Form';


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
})
)
  
  

function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          
            <main className={classes.content}>
          <section>
              <Form/>
          </section>
          </main>
        </div>
    )
}



export default Contact
