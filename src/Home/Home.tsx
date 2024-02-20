import React,{useEffect,useState} from 'react'
import '../Home/Home.css'
import Constants from '../Constants/Constants'
import IDarkmode from '../Interface/IDarkmode'
const Home = (props:IDarkmode) => {
    const [header,setHeader]=useState<string>("")
    const [index,setIndex]=useState<number>(0);

  useEffect(()=>{
    if(Constants.TechStack[index].length===header.length){
    removebyletter()}
    if(header.length===0){
        updateHeader()
    }
  },[header,index])


const updateHeader=()=>{
        setTimeout(()=>{    
            Constants.TechStack[index].split("").forEach((item:string,index)=>{
            setTimeout(() => {
                addbyletter(item)
              }, index * 200);
        })},2000) 
}
const addbyletter=(item:string)=>{
    setHeader(prevHeader => prevHeader + item);
}
const removebyletter=()=>{
    let a=header
    for (let y = 0; y < a.length; y++) {
        setTimeout(()=>{
            a = a.substring(0, a.length-1)
            setHeader(a)
            if(a.length===0){
            setIndex(index+1>=Constants.TechStack.length?0:index+1)
            }
        },100*(y+1))
        
    }
   
}
  return (
    <div className='Home'> 
    <img src={process.env.PUBLIC_URL + '/Images/guardsmanlogo.png'} className='profilephoto'/> 
    <div className='Name HorizontolCenter'>Hello, I'm {Constants.Name}</div>
    <div className='TypingText'><span className='Header'>{header}</span></div>
    <div className='HorizontolCenter'><span className='Overview'>{Constants.PersonalOverview}</span></div>
    <div className='HorizontolCenter'><button className={props.Darkmode?'CVDownloadbtnDarkmode':'CVDownloadbtnLightmode'}>Download CV</button></div>
    </div>
  )
}

export default Home