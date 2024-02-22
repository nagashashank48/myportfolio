import React, { useEffect, useState } from 'react'
import "../About/About.css"
import SchoolIcon from '@mui/icons-material/School';
import Constants from '../Constants/Constants';
import Modal from '@mui/material/Modal';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import IDarkmode from '../Interface/IDarkmode';

const About = (props:IDarkmode) => {
  const [scrollY,setScrollY]=useState<number>(0);
  const [technologies,setTechnologies]=useState<string[]>([]);
  const [showText,setShowText]=useState<boolean>(true);
  const [showinfoPopup,setShowinfoPopup]=useState<boolean>(false);
  const handleScroll = () => {
  requestAnimationFrame(() => {
      setScrollY(window.scrollY)
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

useEffect(()=>{
  let array:string[]=[];
    if(scrollY<=400){
      setTechnologies([])
      setShowText(true)
    }
    if(scrollY>=400 && showText){
      Constants.Technologies.forEach((Technology,index)=>{
        setTimeout(()=>{
          array.push(Technology)
          setTechnologies(array)
                       },200*index)
        });
        setShowText(false)
      }
  },[scrollY])
const handleClose = () => setShowinfoPopup(false)
  return (
    <div className={props.Darkmode?'AboutSectionDarkmode':'AboutSectionLightmode'}>
      <div className='aboutTitle'>About ME</div>
      <div className='Personalinfo'>
      <div className='FirsthalfSection'>
        <div className='Nameinabout'>Hi, I'm {Constants.Name} </div>
        <div className='aboutinfo'>{Constants.aboutyourself}</div>
        <div className='EducationTitle'>Education Details</div>
        <div className='EducationType'><SchoolIcon/><span className='DegreeName'>{Constants.Education[0].Title}</span></div>
        <div className='College'>{Constants.Education[0].College}</div>
        <div className='DegreeDuration'>{Constants.Education[0].PassedOut}</div>
      </div>
      <div className='SecoundhalfSection'>
        <div className='Technologieslbl'>Technologies</div>
      {technologies.map((Technology)=>{return <div ><FiberManualRecordIcon className='doticon'/><span>{Technology}</span></div>})}
      </div>

      </div>
      <button className='SeeMore' onClick={()=>setShowinfoPopup(true)}>See More</button>




      <Modal
        open={showinfoPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='popupcard'>
        <div className='Infolbl'>Personal Info</div>
        <div className='PersonalDetails'>
          <div className='LeftSection'>
            <div className='infoblock'><span className='infolabel'>First Name : </span><span className='infoValue'>{Constants.Personalinfo.FirstName}</span></div>
            <div className='infoblock'><span className='infolabel'>Age : </span><span className='infoValue'>{Constants.Personalinfo.Age}</span></div>
            <div className='infoblock'><span className='infolabel'>Phone : </span><span className='infoValue'>{Constants.Personalinfo.Phone}</span></div>
            <div className='infoblock'><span className='infolabel'>Languages : </span><span className='infoValue'>{Constants.Personalinfo.Languages}</span></div>
            <div className='infoblock'><span className='infolabel'>Address : </span><span className='infoValue' >{Constants.Personalinfo.Address}</span></div>
          </div>
          <div  className='RightSection'>
            <div className='infoblock'><span className='infolabel'>Last Name : </span><span className='infoValue'>{Constants.Personalinfo.LastName}</span></div>
            <div className='infoblock'><span className='infolabel'>Nationality : </span><span className='infoValue'>{Constants.Personalinfo.Nationality}</span></div>
            <div className='infoblock'><span className='infolabel'>Email : </span><span className='infoValue'>{Constants.Personalinfo.Email}</span></div>
            <div className='infoblock'><span className='infolabel'>Linked In : </span><a href={Constants.Personalinfo.Linkedin.Link} className='linkedlink'>{Constants.Personalinfo.Linkedin.Name}</a></div>
          </div>
        </div>
        <div className='EducationalDetialslbl'>Edcational Details</div>
        <div className='EducationalDetials'>
          {Constants.Education.map((item)=>{
            return <div className='EducationBlock'>
              <span className='iconRow'><MenuBookIcon className='Educationicon'/>
              <span className='Passedout'>{item.PassedOut}</span></span>
              <span className='EducationName'>{item.Title}</span>
              <span className='EducationCollege'>{item.College}</span>
              
            </div>
          })}
        </div>
        </div>
      </Modal>
     
    </div>

    
  )
}

export default About