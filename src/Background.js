
import React from 'react'

import RellaxWrapper from 'react-rellax-wrapper'
import {Spring} from 'react-spring/renderprops'


const Background = () => {
    return (
        <div>
        <RellaxWrapper speed={7}>
       {/* <div style={{height:200, width:500,backgroundColor:"red"}}/> */}


       <video  loop autoPlay controls>
    <source src="https://static.videezy.com/system/resources/previews/000/013/339/original/Thin_Smoke_90_-_4K_res.mp4" type="video/mp4"/>
 
</video>




        </RellaxWrapper>
        <RellaxWrapper speed={-9} percentage={0.9}>

        <div style={{height:200, width:500,backgroundColor:"blue"}}/>
        </RellaxWrapper>
      </div>
    )
}

export default Background

