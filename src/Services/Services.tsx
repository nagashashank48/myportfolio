import React, { useEffect, useState } from 'react'
import './Services.css'
import Constants from '../Constants/Constants'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import IDarkmode from '../Interface/IDarkmode';
import IService from '../Interface/IService';
import { Modal } from '@mui/material';
const Services = (props:IDarkmode) => {
    const servicesContainerRef = React.useRef<HTMLDivElement>(null);
    const [showPopup,setShowPopup]=useState<boolean>(false);
    const [popupData,setPopupData]=useState<IService>({Title:"",image:"",Detailedinfo:""});
    useEffect(()=>{
       if(servicesContainerRef.current) {
        servicesContainerRef.current.style.transform = 'translateX(0)';
       } 
    })

    const openPopup=(service:IService)=>{
        setShowPopup(true);
        setPopupData(service)
    }
    const handleClose=()=>{
        setShowPopup(false)
    }
  return (
    <div className='Services'>
        <div className='Serviceslbl'>What I Do</div>
        <div className='ServicesOverview'>{Constants.Servicesinfo}</div>
        <div ref={servicesContainerRef} className='Servicesinfo'>
            {Constants.Services.map((item)=>{
                return <div className={props.Darkmode?'ServiceCardDarkmode':'ServiceCardLightmode'}>
                    <img src={process.env.PUBLIC_URL +  item.image} className='Serviceimage'/>
                    <div className='ServiceTitle'>{item.Title}</div>
                    <div className='Learnmorelbl' onClick={()=>openPopup(item)}>Learn More <ArrowRightAltOutlinedIcon className='arrowicon'/></div>
                </div>
            })}
        </div>

        <Modal
        open={showPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='LearnmorePopup'>
            <img src={process.env.PUBLIC_URL+popupData.image} className='PopupImage'/>
            <div className='PopupTitle'>What is <span className='Title'>{popupData.Title}</span> ?</div>
            <div className='PopupInfo'>{popupData.Detailedinfo}</div>  
        </div>
      </Modal>
    </div>
  )
}

export default Services