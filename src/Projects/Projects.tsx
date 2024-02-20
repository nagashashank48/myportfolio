import React, { useEffect, useState } from 'react'
import './Projects.css'
import Constants from '../Constants/Constants'
import IDarkmode from '../Interface/IDarkmode';
const Projects = (props:IDarkmode) => {
  const [currentProjects,SetCurrentProjects]=useState<number[]>([0,1]);
  const [activeRadiobtn,setActiveRadiobtn]=useState<string>("Center");
  const [isVisible,setIsVisible]=useState<boolean>(false);

  useEffect(()=>{
   setTimeout(()=>{setIsVisible(true)},300) 
  },[currentProjects])
  const showpreviousProject=()=>{
    setIsVisible(false)
    setActiveRadiobtn("Start")
    setTimeout(()=>{ let firstcard=currentProjects.shift()
      let arr = [firstcard?firstcard:0];
        if(firstcard===0){
            arr.unshift(Constants.Projects.length-1)
            SetCurrentProjects(arr)
        }
        else{
          arr.unshift(firstcard!==undefined?firstcard-1:0)
          SetCurrentProjects(arr)
        }},400)
      setTimeout(()=>{setActiveRadiobtn("Center")},400)
      
  }
  const shownextProject=()=>{
    setIsVisible(false)
    setActiveRadiobtn("End")
    setTimeout(() => {
      let secoundcard=currentProjects.pop()
      let arr = [secoundcard?secoundcard:0];
      if(secoundcard===Constants.Projects.length-1){
        SetCurrentProjects([...arr,0])
    }
    else{
      SetCurrentProjects([...arr,secoundcard!==undefined?secoundcard+1:0])
    }
    }, 400);
      
      setTimeout(()=>{setActiveRadiobtn("Center")},400)
  }
  return (
    <div className={props.Darkmode?'ProjectsDarkmode':'ProjectsLightMode'}>
     <div className='Projectslbl'>Projects</div>
     <div className='projectsCarousel'>
    
    {currentProjects.map((project)=>{
      return  <div className={`${props.Darkmode?'projectCardDarkmode':'projectCardLightmode'} ${isVisible?'visible':''}`}>
      <div className='projectheader'>
      <img className='projectImage' src={Constants.Projects[project].image}/>
      <div className='projectTitle'>{Constants.Projects[project].Name}</div>
      <img className='quotes' src={'/Images/quote.svg'}/>
      </div>
      <div className='projectDescription'>{Constants.Projects[project].Description}</div>
      <div className='projectTechnologies'><span className='stackslbl'>Stacks :- </span><span className='stacks'>{Constants.Projects[project].TechnolgiesUsed}</span></div>
    </div>
    })}
    </div>
    <div className='Carousel'>
    <input type="radio" name="radiobtn" className='radiobtn' checked={activeRadiobtn==="Start"} onClick={()=>showpreviousProject()}/>
    <input type="radio" name="radiobtn" className='radiobtn' checked={activeRadiobtn==="Center"}/>
    <input type="radio" name="radiobtn" className='radiobtn' checked={activeRadiobtn==="End"} onClick={()=>shownextProject()}/>
    </div>
    </div>
  )
}

export default Projects