import React,{useState} from 'react'
import {REACT_APP_EMAILJS_RECEIVER,REACT_APP_EMAILJS_USERID,} from 'emailjs-com'
import ReactContactForm from 'react-mail-form';
const ContactMe = ({ env }) => {
  
    return (
      <>
      <h1>Your Feedback</h1>
      <ReactContactForm to="pmoulina76@gmail.com" width="100"titlePlaceholder="hula" buttonText="send"/>
    </>
  )
}
export default ContactMe
