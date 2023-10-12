import React, { useEffect, useRef, useState } from 'react'
import './Progress.css'


const Progress = ({audioRef}) => {
  const progressRef = useRef();

  const [progress, setProgress] = useState(0);


  useEffect(()=>{
    progressRef.current.addEventListener('click', (e)=>{
      const width = progressRef.current.clientWidth;
      const clickX = e.offsetX;
      const duration = audioRef.current.duration;
      audioRef.current.currentTime = (clickX / width) * duration;
    })
  })


  useEffect(()=>{
    audioRef.current.addEventListener('timeupdate', ()=>{
      setProgress(audioRef.current.currentTime/audioRef.current.duration*100)
    });
  })
  return (
    <div className='progressBox' ref={progressRef}>
      <div className="progressBar" style={{
        width:`${progress}%`,
        height:'100%',
        backgroundColor:'black',
        borderRadius:'10px'
      }}></div>
    </div>
  )
}

export default Progress