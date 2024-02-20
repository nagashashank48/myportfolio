import React,{useEffect, useState} from 'react'
import './Navigation.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import BentoOutlinedIcon from '@mui/icons-material/BentoOutlined';
import IDarkmode from '../Interface/IDarkmode';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
const Navigation = (props:IDarkmode) => {
  const [scrollY,setScrollY]=useState<number>(0);
  const [activeScreen,setActiveScreen]=useState<string>("Home");
  const [showNavbar,setShowNavabar]=useState<boolean>(true)
  const NavbarContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(()=>{
     if(NavbarContainerRef.current) {
      NavbarContainerRef.current.style.transform = 'translateY(0)';
     } 
  })

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
      if(scrollY>0&&scrollY<300){
        setActiveScreen("Home")
      }
      else if(scrollY>500&&scrollY<1000){
        setActiveScreen("About")
      }
      else if(scrollY>1150 && scrollY<1650){
        setActiveScreen("Services")
      }
      else if(scrollY>1650 && scrollY<2050){
        setActiveScreen("Projects")
      }
      else if(scrollY>2350 && scrollY<2900){
        setActiveScreen("Experience")
      }
      else if(scrollY>2900){
        setActiveScreen("Contact")
      }
  },[scrollY])

  // useEffect(()=>{
  //   if(scrollY>150 && scrollY<60){
  //     setShowNavabar(false)
  //   }
  //   else{
  //     setShowNavabar(true)
  //   }
  // },[scrollY])
  return (
  //  showNavbar?
   <div ref={NavbarContainerRef} className={props.Darkmode?'NavigationbarDarkmode':'NavigationbarLightmode'}>
      <div className='Navigation'>
      <div className={`${activeScreen==="Contact"&&props.Darkmode?"ActivebuttonDarkmode":activeScreen==="Contact"&&!props.Darkmode?"ActivebuttonLightmode":""} ${props.Darkmode?'TabButtonDarkmode':'TabButtonLightmode'}`} onClick={()=>window.scrollTo({top:3300,behavior:'smooth'})} ><PermContactCalendarOutlinedIcon/>Contact</div>
      <div className={`${activeScreen==="Experience"&&props.Darkmode?"ActivebuttonDarkmode":activeScreen==="Experience"&&!props.Darkmode?"ActivebuttonLightmode":""} ${props.Darkmode?'TabButtonDarkmode':'TabButtonLightmode'}`} onClick={()=>window.scrollTo({top:2500,behavior:'smooth'})}><WorkHistoryOutlinedIcon/>Experience</div>
      <div className={`${activeScreen==="Projects"&&props.Darkmode?"ActivebuttonDarkmode":activeScreen==="Projects"&&!props.Darkmode?"ActivebuttonLightmode":""} ${props.Darkmode?'TabButtonDarkmode':'TabButtonLightmode'}`} onClick={()=>window.scrollTo({top:1900,behavior:'smooth'})}><BentoOutlinedIcon/>Projects</div>
      <div className={`${activeScreen==="Services"&&props.Darkmode?"ActivebuttonDarkmode":activeScreen==="Services"&&!props.Darkmode?"ActivebuttonLightmode":""} ${props.Darkmode?'TabButtonDarkmode':'TabButtonLightmode'}`} onClick={()=>window.scrollTo({top:1250,behavior:'smooth'})}><EngineeringOutlinedIcon/>Services</div>
      <div className={`${activeScreen==="About"&&props.Darkmode?"ActivebuttonDarkmode":activeScreen==="About"&&!props.Darkmode?"ActivebuttonLightmode":""} ${props.Darkmode?'TabButtonDarkmode':'TabButtonLightmode'}`} onClick={()=>window.scrollTo({top:650,behavior:'smooth'})}><Person4OutlinedIcon/>About</div>
      <div className={`${activeScreen==="Home"&&props.Darkmode?"ActivebuttonDarkmode":activeScreen==="Home"&&!props.Darkmode?"ActivebuttonLightmode":""} ${props.Darkmode?'TabButtonDarkmode':'TabButtonLightmode'}`} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><HomeOutlinedIcon/>Home</div>
      </div>
    </div>
    // :<></>
  )
}

export default Navigation