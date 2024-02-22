import React from 'react'
import './Experience.css'
import Constants from '../Constants/Constants'
import IDarkmode from '../Interface/IDarkmode'
//import logo from '/Images/cognizant.png'
const Experience = (props:IDarkmode) => {
  return (
    <div className='Experience'>
    <div className='Experiencelbl'>Experience</div>
    <div className='Companies'>
      {Constants.Experience.map((item)=>{
        return <div className={props.Darkmode?'CompanyCardDarkmode':'CompanyCardLightmode'}>
            <img src={props.Darkmode?process.env.PUBLIC_URL + item.logo.Darkmodeimage:process.env.PUBLIC_URL+item.logo.Lightmodeimage} alt={item.logo.alterText} className={props.Darkmode?'CompanyimageDarkmode':'CompanyimageLightmode'}/>
            <div className='CompanyName'>{item.CompanyName}</div>
            <div className='CompanyRole'>{item.Role}</div>
            <div className='CompanyDuration'>{item.Duration}</div>
          </div>
        
      })}
    </div>
    </div>
  )
}

export default Experience