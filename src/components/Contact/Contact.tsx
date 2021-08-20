import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


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
            <Sidebar/>
            <main className={classes.content}>
          <section>
              redes de contacto y email
          </section>
          </main>
        </div>
    )
}



export default Contact
