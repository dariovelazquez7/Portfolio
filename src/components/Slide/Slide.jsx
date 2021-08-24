import React from "react"
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


export default function Slide (){
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    vertical: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  // const colorPrimary = "#00C2CB";

  const useStyles = makeStyles((theme) =>
  createStyles({ 
    btnList:{
      borderRadius: "10px",
      margin: "5px 0"
    },
    marginR:{
      marginRight: "10px",
    },
  })
  )

  const classes = useStyles()
  return (
    <div className="container">
      <div className="navigation-wrapper"> 
      </div>
      {slider && (
      <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <List key={idx}>
              <ListItem button  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                  classes={{button:classes.btnList}}
                  >
                    {idx === 0? <HomeIcon classes={{root:classes.marginR}}/>:idx === 1? <PersonIcon classes={{root:classes.marginR}}/>:idx === 2? <AppsIcon classes={{root:classes.marginR}}/>:idx === 3? <EmailIcon classes={{root:classes.marginR}}/>: false}
             <ListItemText primary={idx === 0? "Home":idx === 1? "About":idx === 2? "Projects":idx === 3? "Contact": false}/>
            
           </ListItem>
           </List>  
            )
          })}
          </div>
         
      )}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide slide"><Home/></div>
        <div className="keen-slider__slide slide"><About/></div>
        <div className="keen-slider__slide slide"><Projects/></div> 
        <div className="keen-slider__slide slide"><Contact/></div>
        
        {slider && (
          <>
            <ArrowUp
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowDown
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
        </div>
    </div>
  )
}

function ArrowUp(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
    </svg>
  )
}

function ArrowDown(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
    </svg>
  )
}
