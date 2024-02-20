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
            <img src={process.env.PUBLIC_URL + item.logo.image} alt={item.logo.alterText} className='Companyimage'/>
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