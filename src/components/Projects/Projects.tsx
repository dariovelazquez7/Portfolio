import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import dario from "../../img/dario.jpg"
import trekker from "../../img/trekker.png"
import pokeapp from "../../img/pokeapp.png"
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Link from '@material-ui/core/Link';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import YouTubeIcon from '@material-ui/icons/YouTube';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const primaryColor= "#198CD8"
const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
        display: 'flex',
        flexDirection: "column",
        minHeight:"100vh",
        width: "100vw",
        textAlign: "initial",
        justifyContent: "center",
        alignItems: "center",
        
      },
      card:{
        width: "88%",
        minHeight: 420,
        marginLeft: "8px",
        [theme.breakpoints.down("md")]: {
          minHeight: 200,
          minWidth: "44vw",
        }
        
      },
      contenedor:{
        display: "grid",
        marginTop: "50px",
        gridTemplateColumns: "1fr 1fr",
        gap:"10px",
        width: "55%",
        [theme.breakpoints.down("xs")]: {
          marginTop: "20px",
        }
      },
      tipographyTitle:{
        fontFamily: "monospace",
        marginBottom:"40px",
        [theme.breakpoints.down("xs")]: {
          fontSize: "20px",
          marginBottom: "20px",
          textAlign: "center"
        }
      },
      tipography:{
        fontFamily: "monospace",
        [theme.breakpoints.down("xs")]:{
          fontSize: "0.600rem"
        },
      },
      media: { 
        outline: "1px solid black",
        height: "32vh"
       
      },
      expand: {
        height: "40px",
        width:"40px",
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatarHeader:{
        // flex: "0 0 auto",
        marginRight: "5px",
      
      },
      iconBtn:{
        color: "black"
      },
      iconBtnNt:{
        color: "#80808094",
        cursor: "not-allowed"
      },
      avatarOn:{
        display: "flex",
      },
      avatarOff:{
        display: "none"
      },
      boderAvatarGroup:{
        border: "none"
      },
      cardActions:{
        [theme.breakpoints.down("xs")]: {
          padding: "1px"
        }
      },
      cardHeader: {
        [theme.breakpoints.down("xs")]: {
          padding: "5px",
        }
      },
      cardTipografy:{
        [theme.breakpoints.down("xs")]: {
          fontSize: "1rem"
        }
      },
      iconBottom:{
        [theme.breakpoints.down("xs")]: {
          padding: "9px"
        }
      },
      lessPadding: {
        [theme.breakpoints.down("xs")]: {
          padding: "1px 5px"
        }
      }
})
)
  
function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const tema = useTheme()
  const match = useMediaQuery(tema.breakpoints.down('xs'))
  
  const handleExpandClick = () => {
    setExpanded(!expanded); 
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

    return (
    <div className={classes.root}>
      <Typography className={classes.tipographyTitle} variant="h4">
        Mis proyectos:
      </Typography>
        <div className={classes.contenedor}>
          <div>
            <Card className={classes.card} raised>
              <CardHeader classes={{root: classes.cardHeader}}
                avatar={
                  <Link target="_blank" rel="noreferrer" href="https://github.com/dariovelazquez7" >
                      <Avatar alt="Dario Velazquez" src={dario} />
                  </Link>
                  
                }
                title="PokeApp"
                subheader={!match? "Junio, 2021": "2021"}
              />
              <CardMedia
                className={classes.media}
                image={pokeapp}
                title="PokeApp"
              />
              
              <CardActions disableSpacing classes={{root: classes.cardActions}}>
              <Link>
                <IconButton aria-label="webpage" className={classes.iconBtnNt} classes={{root: classes.iconBottom}}>
                  <DesktopMacIcon />
                </IconButton>
              </Link >
              <Link target="_blank" rel="noreferrer" href="https://github.com/dariovelazquez7/PokeApp" >
                <IconButton aria-label="github" className={classes.iconBtn} classes={{root: classes.iconBottom}}>
                  <GitHubIcon />
                </IconButton>
              </Link >
              {!match?
              <Link target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=FxeqR472iZw&t=34s" >
                <IconButton aria-label="webpage" className={classes.iconBtn} classes={{root: classes.iconBottom}}>
                  <YouTubeIcon style={{fontSize:"29px"}}/>
                </IconButton>
              </Link >: ""
              }
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent classes={{root: classes.lessPadding}}>   
                  {!match? <Typography variant="body2" color="textPrimary" component="p" className={classes.tipography}>
                  Desarrollo de una SPA, utilizando React y Redux para el Front End. 
                  Todos los componentes fueron desarrollados con CSS puro.
                  Back End desarrollado en NodeJS, utilizando Express y PostgreSQL como base de datos. 
                  Por una cuestión de optimización la pagina principal solo realiza pedidos de a 40 pokemones.
                  </Typography>:
                  <Typography variant="body2" color="textPrimary" component="p" className={classes.tipography}>
                  Desarrollo de una SPA, utilizando React, Redux y CSS puro para el Front End. 
                  Back End desarrollado en NodeJS, Express y PostgreSQL como base de datos. 
                  </Typography>
                  }
                </CardContent>
              </Collapse>
          </Card>
        </div>
        <div>
          <Card className={classes.card} raised>
            <CardHeader 
            title="Trekker"
            classes={{avatar: classes.avatarHeader, root: classes.cardHeader}}
            subheader={!match? "Julio, 2021": "2021"}
              avatar={!match?
                <div style={{display:"flex"}}>
                  <Link target="_blank" rel="noreferrer" href="https://github.com/dariovelazquez7" >
                    <Avatar alt="Dario Velazquez" src={dario}/>
                  </Link>
                  <Avatar className={clicked? classes.avatarOff: classes.avatarOn} style={{background: primaryColor}}>+7</Avatar>
                  <Collapse in={expanded3} timeout="auto" unmountOnExit >
                  <span className={ clicked? classes.avatarOn: classes.avatarOff}>
                    <AvatarGroup max={7} classes={{avatar: classes.boderAvatarGroup}}>
                      <Link target="_blank" rel="noreferrer" href="https://github.com/wcuberas" >
                        <Avatar alt="Walter Cuberas " src="https://avatars.githubusercontent.com/u/78507317?v=4" />
                      </Link>
                      <Link target="_blank" rel="noreferrer" href="https://github.com/ulises2125" >
                        <Avatar alt="Ulises Scardino" src="https://avatars.githubusercontent.com/u/79987045?v=4" />
                      </Link>
                      <Link target="_blank" rel="noreferrer" href="https://github.com/Pevaq" >
                        <Avatar alt="Pedro Vaquer" src="https://avatars.githubusercontent.com/u/77697735?v=4"/>
                      </Link>
                      <Link target="_blank" rel="noreferrer" href="https://github.com/nitovill" >
                        <Avatar alt="Mariano Villafuerte" src="https://avatars.githubusercontent.com/u/68519005?v=4" />
                      </Link>
                      <Link target="_blank" rel="noreferrer" href="https://github.com/V33RO" >
                        <Avatar alt="Veronica Cardozo" src="https://avatars.githubusercontent.com/u/8940512?v=4" />
                      </Link>
                      <Link target="_blank" rel="noreferrer" href="https://github.com/davidcesaretti" >
                        <Avatar alt="David Cesaretti" src="https://avatars.githubusercontent.com/u/74600056?v=4" />
                      </Link>
                      <Link target="_blank" rel="noreferrer" href="https://github.com/jesusegg" >
                        <Avatar alt="Jesus Gedler" src="https://avatars.githubusercontent.com/u/77858557?v=4" />
                      </Link>
                    </AvatarGroup>
                  </span>
                  </Collapse>
                  <span onClick={() => setClicked(!clicked)}>
                    <IconButton
                      className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded3,
                        })}
                      onClick={handleExpandClick3}
                      aria-expanded={expanded3}
                      aria-label="show more3"
                      >
                        <KeyboardArrowRightIcon />
                    </IconButton>
                  </span>
                </div>
                : <Link target="_blank" rel="noreferrer" href="https://github.com/dariovelazquez7" >
                    <Avatar alt="Dario Velazquez" src={dario}/>
                  </Link>
              }          
            />
            <CardMedia
              className={classes.media}
              image={trekker}
              title="trekker"
            /> 
            
            <CardActions disableSpacing classes={{root: classes.cardActions}}>
            <Link target="_blank" rel="noreferrer" href="https://trekker-59f4e.web.app/" >  
                <IconButton aria-label="webpage" className={classes.iconBtn} classes={{root: classes.iconBottom}}>
                  <DesktopMacIcon />
                </IconButton>
              </Link>
            <Link target="_blank" rel="noreferrer" href="https://github.com/davidcesaretti/reservar" >
                <IconButton aria-label="github" className={classes.iconBtn} classes={{root: classes.iconBottom}}>
                  <GitHubIcon />
                </IconButton>
              </Link>
              {!match?
              <Link target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ATsC3wqbLN4" >
                <IconButton aria-label="webpage" className={classes.iconBtn} classes={{root: classes.iconBottom}}>
                  <YouTubeIcon style={{fontSize:"29px"}} />
                </IconButton>
              </Link>: ""
              }
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded2,
                })}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more2"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <CardContent classes={{root: classes.lessPadding}}>  
                {!match? <Typography variant="body2" color="textPrimary" component="p" className={classes.tipography}>
                Aplicación que permite reservar y poner en alquiler propiedades a traves de Mercado Pago, 
                cuenta con distintos filtrados, panel de administración, creación, edición de post, reseñas, 
                puntuación, manejo de balance, chat y login mediante google y facebook.
                Realizada con React, Redux, Material Ui, Node.Js, Mongoose, MongoDB, 
                Firebase y Typescript.
                </Typography>:
                <Typography variant="body2" color="textPrimary" component="p" className={classes.tipography}>
                Aplicación que permite reservar y poner en alquiler propiedades a traves de Mercado Pago.
                Realizada con React, Redux, Material Ui, Node.Js, Mongoose, MongoDB, 
                Firebase y Typescript.
                </Typography>
                }
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </div>
    )
}

export default Projects
