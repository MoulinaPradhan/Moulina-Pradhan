import React, {useEffect,useState} from 'react'
import {Header,Experiences,ContactMe,AboutMe,Skills,Projects, Education,ContactMeForm,Articles,ToggleMe} from './Components'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

import RellaxWrapper from 'react-rellax-wrapper'
import Wave from 'react-wavify'

import SmokeElement from "smoke-effect-react";
import Background from './Background'
import PieCharts from './Components/PieCharts';
import { SmoothProvider } from 'react-smooth-scrolling'

import {RemoveScrollBar} from 'react-remove-scroll-bar';
// import PieChart from './Components/Pie Chart'
import { StickyContainer, Sticky } from 'react-sticky';
import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
    {loading === false ? (
       <div className="App">
   
       <Header/>
       <ToggleMe/>
       <SmoothProvider skew={true} >
      <AboutMe/> 
    <AnimatedOnScroll animationIn="bounceDown" duration="1"> 
     <PieCharts/>
     </AnimatedOnScroll>
   
   <Experiences/>
     <AnimatedOnScroll animationIn="bounceInUp">
     <Projects />
  </AnimatedOnScroll>
     <Articles/>
     </SmoothProvider> 
     {/* <AnimatedOnScroll animationIn="bounceInLeft" animationOut="fadeIn"> */}
     <Education/>
     {/* </AnimatedOnScroll> */}
   
     
    
     <ContactMe/>
 
    
 
    
     </div>
    ) : (
      <Loader/>
    )}
   
    </>
  );
}

export default App;
