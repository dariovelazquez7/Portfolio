import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./test2.css"
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
import { idText } from "typescript"

export default function Slide2 (){
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  const colorPrimary = "#00C2CB";



  const useStyles = makeStyles((theme) =>
  createStyles({
    icon:{
      margin: theme.spacing(1.5, 0),
      "&:focus":{
          color: colorPrimary
      },
      lista:{
        display: 'flex',
        justifyContent: "center",
        // flexDirection: "column",
        backgroundColor:"black",
        color: "white",
          
    },
    }
  })
  )

  const classes = useStyles()
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1"><Home/></div>
        <div className="keen-slider__slide number-slide2"> <About/></div>
        <div className="keen-slider__slide number-slide4"><Projects/></div> 
        <div className="keen-slider__slide number-slide3"><Contact/></div>
        
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <List className={classes.lista}>
              <ListItem button key={idx} onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                  >
                    {idx === 0? <HomeIcon/>:idx === 1? <PersonIcon/>:idx === 2? <AppsIcon/>:idx === 3? <EmailIcon/>: false}
             <ListItemText primary={idx === 0? "Home":idx === 1? "About":idx === 2? "Projects":idx === 3? "Contact": false}/>
             {console.log(idx)}
           </ListItem>
           </List>
            )
          })}
        </div>
      )}
    </>
  )
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}
