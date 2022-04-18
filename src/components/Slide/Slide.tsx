import React,{ useState } from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./slide.css"
import About from "../About/About"
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Home from "../Home/Home"
import List from '@material-ui/core/List';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { useMediaQuery, useTheme } from '@material-ui/core';


const primaryColor= "#198CD8"
const useStyles = makeStyles((theme:Theme) =>
createStyles({ 
 container:{
  display: "flex",
 },
  marginR:{
    marginRight: "10px",
  },
  hoverBtn:{
    borderRadius: "20px",
    transition: "ease-in",
    "&:hover":{
      borderRadius: "20px",
     background: "rgb(218, 218, 218, 0.1)",
     transition: "ease-in",
    }
  },
  arrow: {
    position: "absolute",
    left: "50%",
    transform: "translateY(-50%)",
    WebkitTransform:"translateY(-50%)",
    fill: "#fff",
    cursor: "pointer",
    animation: "$jump 1.5s ease 0s infinite normal",
  },
  "@keyframes jump":{ 
    "0%, 20%, 50%, 70%, 100%":{
      transform: "translateY(0) translateX(-50%)",
      WebkitTransform: "translateY(0) translateX(-50%)",
    },
    "40%": {
      transform: "translateY(-3px) translateX(-50%)",
      WebkitTransform: "translateY(-3px) translateX(-50%)",
    },
    "60%": {
      transform: "translateY(-1.5px) translateX(-50%)",
      WebkitTransform: "translateY(-1.5px) translateX(-50%)",
    }
  },
  iconArrowUp:{
    height:"40px",
    width: "40px",
    top: "0px",
  },
  iconArrowDown:{
    height:"40px",
    width: "40px",
    bottom: 0,
    top: "auto",
  },
  arrowDisabled: {
    display: "none"  
  },
  dots:{  
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRight:"0.5px solid #707070",
    width: "55%",
    // transition: "ease 0.5s",
  [theme.breakpoints.down('xs')]:{
    position: "absolute",
    zIndex: 1,
    display: "flex",
    height: "100%",
    background: "black",
    transition: "left ease 0.5s",
    width: "55%"
    }
  },
  dot:{
    border: "none",
    "&:focus":{
      outline: "none",
    }
  },

  dotActive:{
    background: primaryColor,
  borderRadius: "20px",
  "&:hover":{
    background: primaryColor,
    borderRadius: "20px",
  }
  },
  sideMenu:{
    display: "none",
    position: "fixed",
    left: 5,
    top: 7,
    zIndex: 2,
    [theme.breakpoints.down('xs')]:{
      display: "inline",
    }
  },
})
)



export default function Slide (){
  const [open, setOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState<Number>(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    vertical: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  const classes = useStyles()
  
  return (
    <div className={classes.container}>
      {open?
        <CloseIcon onClick={() => setOpen(!open)} className={classes.sideMenu}/>:
        <MenuIcon onClick={() => setOpen(!open)} className={classes.sideMenu} />
      }
      
      {slider && (
      <div className={classes.dots} style={{left: open? 0: "-100%", transition: "left 0.5s", }}>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <List key={idx} style={{margin: "0 10px"}}>
              <ListItem button  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  className={(currentSlide === idx ? classes.dotActive: classes.dot )}
                  classes={{root: classes.hoverBtn}}
                  >
                    {
                    idx === 0? 
                    <HomeIcon classes={{root:classes.marginR}}/>:
                    idx === 1? 
                    <PersonIcon classes={{root:classes.marginR}}/>:
                    idx === 2?
                     <AppsIcon classes={{root:classes.marginR}}/>:
                     idx === 3?
                      <EmailIcon classes={{root:classes.marginR}}/>: false
                    }
             <ListItemText primary={
                    idx === 0?
                    "Inicio":idx === 1? 
                    "Sobre mi":idx === 2? 
                    "Proyectos":idx === 3? 
                    "Contacto": false}
                    />
           </ListItem>
           </List>  
            )
          })}
          </div>
         
      )}
      <div ref={sliderRef} className={open? "keen-slider-mobile":"keen-slider"} >
        <div className="keen-slider__slide slide" ><Home/></div>
        <div className="keen-slider__slide slide" ><About/></div>
        <div className="keen-slider__slide slide" ><Projects/></div> 
        <div className="keen-slider__slide slide" ><Contact/></div>
        
        {slider && (
          <>
            <ArrowUp
              onClick={(e:any) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowDown
              onClick={(e:any) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
        </div>
    </div>
  )
}

interface propsFunction{
  disabled: boolean,
  onClick: React.MouseEventHandler<SVGSVGElement>,
}

function ArrowUp(props:propsFunction) {
  
  const classes = useStyles()
  const disabled = props.disabled
  return (
    <KeyboardArrowUpIcon onClick={props.onClick}
    classes={{root: disabled? classes.arrowDisabled: classes.iconArrowUp}}
    className={classes.arrow}/>
  )
}

function ArrowDown(props:propsFunction) {
  const classes = useStyles()
  const disabled = props.disabled
  return (
  <KeyboardArrowDownIcon onClick={props.onClick}
  classes={{root: disabled? classes.arrowDisabled: classes.iconArrowDown}} 
  className={classes.arrow}/>
  ) 
}

