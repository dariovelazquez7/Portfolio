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
      },
      tipographyTitle:{
        fontFamily: "monospace",
        marginBottom:"40px",
        [theme.breakpoints.down("xs")]:{
          fontSize: "20px",
          marginBottom:"15px",
        },
      },
      tipography:{
        fontFamily: "monospace",
        maxWidth: "800px",
        marginBottom:"40px",

        [theme.breakpoints.down("xs")]:{
          fontSize: "12px",
          marginBottom:"10px",
        }
      },
      tipography2:{
        fontFamily: "monospace",
        maxWidth: "800px",
        marginBottom:"40px",

        [theme.breakpoints.down("xs")]:{
          fontSize: "16px",
          marginBottom:"10px",
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
        maxWidth: "800px",
        height: "200px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        textAlign: "center",
      justifyItems: "start",
      },
      cursor:{
        position:"absolute",
        width:0,
        background: "black",
        borderLeft: "2px solid rgba(255, 255, 255, 0.75)",
        animation: "$cursor 1.2s infinite normal ",
      },
      "@keyframes cursor":{
        from: {
          borderLeftColor: "rgba(255, 255, 255, 0.75)"
        },
        to: {
          borderLeft: "none"
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
        <main>
          <header>
            <Typography className={classes.tipographyTitle} variant="h4">
              Sobre mí:
            </Typography>
          </header>
          <section>
            <Typography variant="body2" className={classes.tipography}>
            Descubrí mi pasión por el desarrollo web hace relativamente poco tiempo, pero me bastó para saber 
            que es a lo que quiero dedicarme el resto de mi vida. Empiezo así una etapa que no va a tener techo, 
            en donde buscaré el óptimo desarrollo personal y profesional dentro de este campo.
            Soy apasionado por lo que emprendo, critico de mi mismo, y con buena capacidad para trabajar en equipo.
            Me gusta ser detallista y aportar desde el lugar que me toca. siempre con criterio y objetividad... 
            <span className={classes.cursor}>&#160;</span>
            </Typography>
          </section>
          <Typography className={classes.tipography2} variant={"h5"}>
            Skills:
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
            <div style={match? {marginLeft:"-11px"}:{marginLeft:"-22px"}}>
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
