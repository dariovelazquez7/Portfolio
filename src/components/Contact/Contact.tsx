import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Form from '../Form/Form';
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const primaryColor= "#198CD8"
const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        minHeight:"100vh",
      
      },
      tipography:{
        fontFamily: "monospace",
        marginBottom:"40px",
      },
    content: {
        padding: theme.spacing(1),
        textAlign: "initial",
        fontFamily: "monospace",
        display: "flex"
      },
      logo: {
        height: "70px",
        width: "70px",
        "&:hover":{
          cursor:"pointer"
        }
      },
      download:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background: primaryColor,
        width: "65px",
        height:"65px",
        color: "white", 
        "&:hover":{
          cursor:"pointer"
        }
      },
      sectionLogo:{
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-around",
      },
      divslogo:{
        display: "flex",
        alignItems: "center",
        transition:  "0.4s ease",
        "&:hover":{
          transition:  "0.4s ease",
          transform: "translateY(3px)",
          transformOrigin: "center center",
        }
      },
      
      tipographyLogo:{
        fontFamily: "monospace", 
        marginLeft:"100px",
        marginRight: "30px",
        
      },
      git:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background: "white",
        width: "65px",
        height:"63px",
        transition:  "0.4s ease",
        "&:hover":{
          transition:  "0.4s ease",
          transform: "translateY(3px)",
          transformOrigin: "center center",
        }
      }
})
)
  
  

function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Typography className={classes.tipography} variant="h4">
        Contacto:
      </Typography>
            <main className={classes.content}>
              <Form/>
             <section className={classes.sectionLogo}>
                <Typography variant="body1" className={classes.tipographyLogo}> 
                ✅ Perfil de Linkedin:
                </Typography>
                <Typography variant="body1" className={classes.tipographyLogo}> 
                ✅ Perfil de github:
                </Typography>
                <Typography variant="body1" className={classes.tipographyLogo}> 
                ✅ Descarga mi CV:
                </Typography>
             </section>
              <section className={classes.sectionLogo}>
                <div className={classes.divslogo}>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/velazquez-dario/">
                  <img src={linkedin} alt="https://www.linkedin.com/in/velazquez-dario/" className={classes.logo}/>
                  </a>
                </div>
                <div className={classes.git}>
                <a target="_blank" rel="noreferrer" href="https://github.com/dariovelazquez7">
                  {/* <img src={github} alt="https://github.com/dariovelazquez7" className={classes.logo}/> */}
                  <GitHubIcon style={{fontSize:"65px", color:"#198CD8"}}/> 
                </a>
                </div>
                <div className={classes.divslogo}> 
                  <div className={classes.download}>
                  
                <a href="https://drive.google.com/uc?export=download&id=1ew6ZeEZ6G2wcmt3K2OMTCKagppWN_TJc">
                    <GetAppIcon style={{fontSize:"50px"}}/>
                </a>
                  </div>

                </div>
                  
              </section>
          </main>
        </div>
    )
}



export default Contact
