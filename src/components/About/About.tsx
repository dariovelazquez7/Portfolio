import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
    
      tipography:{
        fontFamily: "monospace",
        maxWidth: "800px",
        marginBottom:"40px",
      },
      icons:{
        width: "50px",
        height:"50px",
        
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
        animation: "$cursor 1s infinite normal ",
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
   
    return (
        <div className={classes.root}>
        <main>
          <header>
            <Typography className={classes.tipography} variant="h4">
              Sobre mí...
            </Typography>
          </header>
          <section>
            <Typography variant="body2" className={classes.tipography}>
            Descubrí mi pasión por el desarrollo web hace relativamente poco tiempo, pero me bastó para saber 
            que es a lo que quiero dedicarme el resto de mi vida. Empiezo así una etapa que no va a tener techo, 
            en donde buscaré el óptimo desarrollo personal y profesional dentro de este campo.
            Soy apasionado por lo que emprendo, critico de mi mismo, y con buena capacidad para trabajar en equipo.
            Me gusta ser detallista y aportar desde el lugar que me toca. siempre con criterio y objetividad <span className={classes.cursor}>&#160;</span>
            </Typography>
          </section>
          <Typography className={classes.tipography} variant="h5">
            Skills:
          </Typography>
          <section className={classes.containerSkills}>
            <div>
              <img src={js} alt="" className={classes.icons}/>
              <h3>Javascript</h3>
            </div>
            <div>
              <img src={css} alt="" className={classes.icons}/>
              <h3>Css</h3>
            </div>
            <div>
              <img src={html} alt="" className={classes.icons}/>
              <h3>Html</h3>
            </div>
            <div>
              <img src={react} alt="" className={classes.icons}/>
              <h3>React</h3>
            </div>
            <div>
              <img src={redux} alt="" className={classes.icons}/>
              <h3>Redux</h3>
            </div>
            <div style={{marginLeft:"-22px"}}>
              <img src={express} alt="" style={{width:"100px", height:"55px", }} />
              <h3>Express</h3>
            </div>
            <div>
              <img src={sql} alt="" className={classes.icons}/>
              <h3>Sequelize</h3>
            </div>
            <div>
              <img src={node} alt="" className={classes.icons}/>
              <h3>Node js.</h3>
            </div>
            <div>
              <img src={typescript} alt="" className={classes.icons}/>
              <h3>Typescript</h3>
            </div>
            <div>
              <img src={mongo} alt="" className={classes.icons}/>
              <h3>MongoDB</h3>
            </div>
            <div>
              <img src={git} alt="" className={classes.icons}/>
              <h3>Git</h3>
            </div>
            <div>
              <img src={postgres} alt="" className={classes.icons}/>
              <h3>Postgres</h3>
            </div>
          </section>
          </main>
        </div>
    )
}

export default About
