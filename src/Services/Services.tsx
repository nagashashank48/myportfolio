import React, { useEffect } from 'react'
import './Services.css'
import Constants from '../Constants/Constants'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import IDarkmode from '../Interface/IDarkmode';
const Services = (props:IDarkmode) => {
    const servicesContainerRef = React.useRef<HTMLDivElement>(null);

    useEffect(()=>{
       if(servicesContainerRef.current) {
        servicesContainerRef.current.style.transform = 'translateX(0)';
       } 
    })
  return (
    <div className='Services'>
        <div className='Serviceslbl'>What I Do</div>
        <div className='ServicesOverview'>{Constants.Servicesinfo}</div>
        <div ref={servicesContainerRef} className='Servicesinfo'>
            {Constants.Services.map((item)=>{
                return <div className={props.Darkmode?'ServiceCardDarkmode':'ServiceCardLightmode'}>
                    <img src={process.env.PUBLIC_URL +  item.image} className='Serviceimage'/>
                    <div className='ServiceTitle'>{item.Title}</div>
                    <div className='Learnmorelbl'>Learn More <ArrowRightAltOutlinedIcon className='arrowicon'/></div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services