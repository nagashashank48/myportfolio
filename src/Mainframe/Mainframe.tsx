import React, { useState } from 'react'
import './Mainframe.css'
import Navigation from '../Navigation/Navigation'
import Home from '../Home/Home'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Mainframe = () => {
  const [isDarkmode,setIsDarkmode]=useState<boolean>(true);
 


  return (
    <div className={isDarkmode?'mainframedarkmode':'mainframelightmode'}>
       <div className='Navigationbar'> <Navigation Darkmode={isDarkmode}/></div>
        <div className={isDarkmode?'darkmodechangebtn':'lightmodechangebtn'} onClick={()=>setIsDarkmode(!isDarkmode)}>{isDarkmode?<LightModeIcon className={isDarkmode?"darkmodeicon":"lightmodeicon"}/>:<DarkModeIcon/>}</div>
        <Home Darkmode={isDarkmode}/>
        <About Darkmode={isDarkmode}/>
        <Services Darkmode={isDarkmode}/>
        <Projects Darkmode={isDarkmode}/>
        <Experience Darkmode={isDarkmode}/>
        <Contact Darkmode={isDarkmode}/>
    </div>
  )
}

export default Mainframe