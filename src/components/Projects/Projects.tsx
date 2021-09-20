import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
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



const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
        display: 'flex',
        flexDirection: "column",
        minHeight:"100vh",
        textAlign: "initial",
        justifyContent: "center",
       
      },
      card:{
        minWidth: 400,
        maxWidth: 400,
        minHeight: 400,
       
      },
      contenedor:{
        display: 'flex',
        marginTop: "50px",
      },
      tipography:{
        fontFamily: "monospace",
        marginBottom:"40px"
      },
      media: { 
        outline: "1px solid black",
        height: 300
       
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar:{
        backgroundColor: "#00C2CB",
        border: "none",
      },
      iconBtn:{
        color: "black"
      },
      iconBtnNt:{
        color: "#80808094",
        cursor: "not-allowed"
      },
      
})
)
  


function Projects() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
   
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
 
  
    return (
    <div className={classes.root}>
      <Typography className={classes.tipography} variant="h4">
        Mis proyectos
      </Typography>
      <div className={classes.contenedor}>
        <div>
      <Card className={classes.card} style={{marginRight: "70px"}} raised>
      <CardHeader
        avatar={
          <Avatar src={dario} alt="Dario Velazquez"/>
        }
        
        title="PokeApp"
        subheader="Junio, 2021"
      />
      <CardMedia
        className={classes.media}
        image={pokeapp}
        title="PokeApp"
      />
      
      <CardActions disableSpacing >
      <Link>
        <IconButton aria-label="webpage" className={classes.iconBtnNt}>
          <DesktopMacIcon />
        </IconButton>
        </Link >
       <Link target="_blank" rel="noreferrer" href="https://github.com/dariovelazquez7/PokeApp" >
        <IconButton aria-label="github" className={classes.iconBtn}>
          <GitHubIcon />
        </IconButton>
        </Link >
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
        <CardContent>   
          <Typography variant="body2" color="textPrimary" component="p">
          Desarrollo de una SPA, 
        utilizando React y Redux para el Front End. Todos los componentes fueron desarrollados con CSS puro.
        Back End desarrollado en NodeJS, utilizando Express y PostgreSQL como base de datos. 
        Por una cuestión de optimización la pagina principal solo realiza pedidos de a 40 pokemones.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    <div>
    <Card className={classes.card} raised>
      <CardHeader
      title="Trekker"
      subheader="Julio, 2021"
        avatar={
          <AvatarGroup max={2} classes={{avatar: classes.avatar}}>
            <Avatar alt="Dario Velazquez" src={dario} />
            <Avatar alt="Walter Cuberas " src="https://avatars.githubusercontent.com/u/78507317?v=4" />
            <Avatar alt="Ulises Scardino" src="https://avatars.githubusercontent.com/u/79987045?v=4" />
            <Avatar alt="Pedro Vaquer" src="https://avatars.githubusercontent.com/u/77697735?v=4"/>
            <Avatar alt="Mariano Villafuerte" src="https://avatars.githubusercontent.com/u/68519005?v=4" />
            <Avatar alt="Veronica Cardozo" src="https://avatars.githubusercontent.com/u/8940512?v=4" />
            <Avatar alt="David Cesaretti" src="https://avatars.githubusercontent.com/u/74600056?v=4" />
            <Avatar alt="Jesus Gedler" src="https://avatars.githubusercontent.com/u/77858557?v=4" />
        </AvatarGroup>
        }          
      />
      <CardMedia
        className={classes.media}
        image={trekker}
        title="trekker"
      /> 
      
      <CardActions disableSpacing>
       <Link target="_blank" rel="noreferrer" href="https://trekker-59f4e.web.app/" >  
          <IconButton aria-label="webpage" className={classes.iconBtn}>
            <DesktopMacIcon />
          </IconButton>
        </Link>
       <Link target="_blank" rel="noreferrer" href="https://github.com/davidcesaretti/reservar" >
          <IconButton aria-label="github" className={classes.iconBtn}>
            <GitHubIcon />
          </IconButton>
        </Link>
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
        <CardContent>  
          <Typography variant="body2" color="textPrimary" component="p">
          Aplicación que permite reservar y poner en alquiler propiedades a traves de Mercado Pago, 
          cuenta con distintos filtrados, panel de administración, creación, edición de post, reseñas, 
          puntuación, manejo de balance, chat y login mediante google y facebook.
          Realizada con React, Redux, Material Ui, Node.Js, Mongoose, MongoDB, 
          Firebase y Typescript.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </div>
        </div>
    )
}

export default Projects
