import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Form from '../Form/Form';
import linkedin from "../../img/linkedin.png";
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import GitHubIcon from '@material-ui/icons/GitHub';



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
        [theme.breakpoints.down("xs")]:{
          fontSize: "20px",
          marginBottom:"10px",
          textAlign: "center"
        }
      },
    content: {
        padding: theme.spacing(1),
        textAlign: "initial",
        fontFamily: "monospace",
        display: "flex",
        [theme.breakpoints.down("xs")]:{
          flexDirection: "column",
        }
      },
      logo: {
        height: "65px",
        width: "65px",
        "&:hover":{
          cursor:"pointer"
        },
        [theme.breakpoints.down("xs")]:{
          height: "45px",
          width: "45px",
        }
      },
      downloadBackground:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background: primaryColor,
        width: "65px",
        height:"65px",
        color: "white", 
        transition:  "0.4s ease",
        "&:hover":{
          transition:  "0.4s ease",
          transform: "translateY(3px)",
          transformOrigin: "center center",
        },
        
        [theme.breakpoints.down("xs")]:{
          height: "45px",
          width: "45px",
        }
      },
      download:{
        fontSize: "50px",
        [theme.breakpoints.down("xs")]:{
          height: "35px",
          width: "35px",
        }
      },
      
      sectionLogo:{
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-around",
        [theme.breakpoints.down("xs")]:{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop:"5px",
        }
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
        [theme.breakpoints.down("xs")]:{
          display: "none",
        }
      },
      gitBackground:{
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
        },
        [theme.breakpoints.down("xs")]:{
          width: "44px",
          height:"42px",
        }
      },
      git:{
        fontSize:"65px", 
        color:"#198CD8",
        [theme.breakpoints.down("xs")]:{
          width: "45px",
          height:"45px",
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
                <div className={classes.gitBackground}>
                  <a target="_blank" rel="noreferrer" href="https://github.com/dariovelazquez7">
                    <GitHubIcon className={classes.git}/> 
                  </a>
                </div>
                <div className={classes.downloadBackground}>      
                  <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ew6ZeEZ6G2wcmt3K2OMTCKagppWN_TJc/view">
                      <GetAppIcon className={classes.download}/>
                  </a>
                </div>       
              </section>
          </main>
        </div>
    )
}



export default Contact
