import React, {useEffect} from 'react'
import {Header,ContactMe,AboutMe,Skills,Projects, Education} from './Components'
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import Wave from 'react-wavify'
import { ParallaxProvider,Parallax, Background,Image } from 'react-scroll-parallax';
import SmokeElement from "smoke-effect-react";

function App() {

  return (
    <div className="App">
    
      <Header/>
    <AboutMe/>
    <AnimatedOnScroll animationIn="rollIn">
    <Skills />
    </AnimatedOnScroll>
    <AnimatedOnScroll animationIn="bounceInUp">
    <Projects />
    </AnimatedOnScroll>
    <AnimatedOnScroll animationIn="bounceInLeft" animationOut="fadeOut">
   
    <Education/>
    </AnimatedOnScroll>
 <ParallaxProvider className="custom-class" y={[-20, 20]} tagOuter="figure">
    <ContactMe/>
    </ParallaxProvider>
    {/* <SmokeElement
          src=""
          opacity="1"
          smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
          smokeOpacity="0.5"
        /> */}
    
    </div>
  );
}

export default App;
