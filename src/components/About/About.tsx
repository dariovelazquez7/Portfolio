import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import js from "../../img/js.png"
import css from "../../img/css.png"
import html from "../../img/html.png"
import typescript from "../../img/typescript.png"
import git from "../../img/git.png"
import node from "../../img/node.png"
import mongo from "../../img/mongo.png"
import postgres from "../../img/postgres.png"
import redux from "../../img/redux.png"
import react from "../../img/react.png"
import sql from "../../img/sql.png"
import express from "../../img/express.png"

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
        display: 'flex',
        alignItems: "center",
        minHeight:"100vh",
        flexGrow: 1,
        textAlign: "initial",
        justifyContent: "center",
      },
      tipographyTitle:{
        fontFamily: "monospace",
        marginBottom:"40px",
        textAlign:"center",
        [theme.breakpoints.down("xs")]:{
          fontSize: "20px",
          marginBottom:"15px",
          textAlign: "center"
        },
      },
      tipography:{
        fontFamily: "monospace",
        fontSize: "17px",
        marginBottom:"40px",

        [theme.breakpoints.down("xs")]:{
          fontSize: "12px",
          marginBottom:"15px",
          textAlign: "justify",
          paddingRight: "10px",
        }
      },
      tipography2:{
        fontFamily: "monospace",
        textAlign:"center",
        marginBottom:"40px",

        [theme.breakpoints.down("xs")]:{
          fontSize: "16px",
          marginBottom:"15px",
          textAlign: "center",
        }
      },
      tipographyIcons:{
        fontFamily: "monospace",
        [theme.breakpoints.down("xs")]:{
          fontSize: "8px",
          marginBottom:"10px",
        }
      },
      icons:{
        width: "50px",
        height:"50px",
        transition:  "0.4s ease",
        "&:hover":{
          transition:  "0.4s ease",
          transform: "translateY(2px)",
          transformOrigin: "center center",
        }, 
        [theme.breakpoints.down("xs")]:{
          width: "35px",
        height:"35px",
        }
      },
      especialExpress:{
        width:"100px", 
        height:"55px",
        transition:  "0.4s ease",
        "&:hover":{
          transition:  "0.4s ease",
          transform: "translateY(2px)",
          transformOrigin: "center center",
        },
        [theme.breakpoints.down("xs")]:{
          width: "75px",
          height:"40px",
        }
      },
      containerSkills:{
        
        height: "200px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        textAlign: "center",
        justifyItems: "center",
        [theme.breakpoints.down("xs")]:{
        padding: "10px 0"
        }
      },
      cursor:{
        position:"absolute",
        width:0,
        background: "black",
        borderLeft: "1.5px solid rgba(255, 255, 255, 0.75)",
        animation: "$cursor 1.1s infinite normal",
      },
      "@keyframes cursor":{
        from: {
          borderLeft: "1.5px solid rgba(255, 255, 255, 0.75)",
        },
        to: {
          borderLeft: "none",
        }
  }
})
)
  
  

function About() {
    const classes = useStyles();
    const tema = useTheme()
    const match = useMediaQuery(tema.breakpoints.down('xs'))

    return (
        <div className={classes.root}>
        <main style={{width: "55%"}}>
          <header>
            <Typography className={classes.tipographyTitle} variant="h4">
              Sobre mí:
            </Typography>
          </header>
          <section>
            <Typography variant='body2' className={classes.tipography}>
            Mi nombre es Darío, y soy de Buenos Aires, Argentina.
            Cuando no estoy programando me gusta pasar tiempo con amigos, jugar futbol y jugar videosjuegos.
            A inicios del año 2021 comencé a interesarme por el desarrollo web y encontré, por fin, mi verdadera vocación.
            Estoy en constante aprendizaje, y busco nuevos desafíos ya que gracias a ellos podré superarme día a día,
            así que puedo decir que todavía queda mucho código por escribir...
            <span className={classes.cursor}>&#160;</span>
            </Typography>
          </section>
          <Typography className={classes.tipography2} variant={"h5"}>
            Mi stack tecnologico:
          </Typography>
          <section className={classes.containerSkills}>
            <div>
              <img src={js} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >Javascript</h3>
            </div>
            <div>
              <img src={css} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >Css</h3>
            </div>
            <div>
              <img src={html} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >Html</h3>
            </div>
            <div>
              <img src={react} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >React</h3>
            </div>
            <div>
              <img src={redux} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >Redux</h3>
            </div>
            <div style={{marginLeft:match? "-11px": "-22px"}}>
              <img src={express} alt="" className={classes.especialExpress} />
              <h3 className={classes.tipographyIcons} >Express</h3>
            </div>
            <div>
              <img src={sql} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >Sequelize</h3>
            </div>
            <div>
              <img src={node} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >Node js.</h3>
            </div>
            <div>
              <img src={typescript} alt="" className={classes.icons} style={{borderRadius: "9px"}}/>
              <h3 className={classes.tipographyIcons} >Typescript</h3>
            </div>
            <div>
              <img src={mongo} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >MongoDB</h3>
            </div>
            <div>
              <img src={git} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >Git</h3>
            </div>
            <div>
              <img src={postgres} alt="" className={classes.icons}/>
              <h3 className={classes.tipographyIcons} >Postgres</h3>
            </div>
          </section>
          </main>
        </div>
    )
}

export default About
