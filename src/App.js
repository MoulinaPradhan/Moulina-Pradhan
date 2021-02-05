import React, {useEffect} from 'react'
import {Header,Experiences,ContactMe,AboutMe,Skills,Projects, Education} from './Components'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

import RellaxWrapper from 'react-rellax-wrapper'
import Wave from 'react-wavify'
// import { ParallaxProvider,Parallax, Background,Image } from 'react-scroll-parallax';
import SmokeElement from "smoke-effect-react";
import Background from './Background'
import PieCharts from './Components/PieCharts';



function App() {

  return (
    <div className="App">

      <Header/>
      
     <AboutMe/>
    
    <AnimatedOnScroll animationIn="bounceDown" duration="1"> 
   
    <PieCharts/>
    </AnimatedOnScroll>
  <Experiences/>
    <AnimatedOnScroll animationIn="bounceInUp">
    <Projects />
    </AnimatedOnScroll>
    <AnimatedOnScroll animationIn="bounceInLeft" animationOut="fadeOut">
 
    <Education/>
    </AnimatedOnScroll>
    <shooting-stars image="./star.png" height="'10px'" width="10" min-speed="10" max-speed="50" num="10"></shooting-stars>
    <ContactMe/>
  

   
    </div>
  );
}

export default App;
