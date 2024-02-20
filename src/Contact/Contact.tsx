import React from 'react'
import './Contact.css'
// import EmailIcon from '@mui/icons-material/MailOutlineOutlined';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import HomeIcon from '@mui/icons-material/LocationOnOutlined';
import Constants from '../Constants/Constants'
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import IDarkmode from '../Interface/IDarkmode';

const Contact = (props:IDarkmode) => {
  return (
    <div className={props.Darkmode?'ContactsDarkmode':'ContactsLightmode'}>
        <div className='Contactlbl'>Contact</div> 
        <div className='ContactsBlock'>
        {Constants.Contact.map((item)=>{
          return <div className={props.Darkmode?'ContactDarkmode':'ContactLightmode'}>
            <div className='ContactLogo'><a  href={item.Title==="Email"?`mailto:${item.Value}`:item.Title==="Phone"?`tel:${item.Value}`:item.Title==="LinkedIn"?`${item.Link}`:""} target="_blank" className='iconNavigate'> {item.icon==="EmailIcon"?<BiLogoGmail className='contactIcon'/>:item.icon==="LocalPhoneIcon"?<FaPhoneAlt className='contactIcon'/>:item.icon==="LinkedInIcon"?<FaLinkedin className='contactIcon'/>:item.icon==="HomeIcon"?<CiLocationOn className='contactIcon'/>:""}</a></div>
            <div className='ContactDetails'><div className='contactTitle'>{item.Title}</div>
            <a href={item.Title==="Email"?`mailto:${item.Value}`:item.Title==="Phone"?`tel:${item.Value}`:item.Title==="LinkedIn"?`${item.Link}`:`https://www.google.com/maps?q=${item.Value}`} className='contactValue' target="_blank">{item.Value}</a></div>
          </div>
        })}
        </div>
    </div>
  )
}

export default Contact