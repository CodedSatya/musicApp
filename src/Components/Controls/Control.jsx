import React from 'react';
import './Control.css'
// Material Icons
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';


import { useState } from 'react';


const Control = ({ totalMusic, currMusic, setMusic, audioControl, playing, setPlaying }) => {
  const [loop, setLoop] = useState(false);

  return (
    <div>
      <SkipPreviousIcon fontSize='large' className='controls' onClick={()=>{
        if(!loop){
            if (currMusic === 0) {
              setMusic(totalMusic - 1)
            } else {
              setMusic(currMusic - 1);
            }
            // audioControl.current.load();
            setPlaying(true);
        }
      }}/>

      
        <StopCircleIcon fontSize='large' className='controls' onClick={() => {
        audioControl.current.pause();
        audioControl.current.currentTime = 0;
        setPlaying(false);
      }}/>
      {
        playing ?
          <PauseCircleIcon fontSize='large' onClick={() => {
            setPlaying(!playing);
          }} className='controls' />
          :
          <PlayCircleIcon className='controls' fontSize='large' onClick={() => {
            setPlaying(!playing);
          }} />

      }

      {
        loop?
          <RepeatOneIcon fontSize='large' className='controls' onClick={() => {
            setLoop(!loop);
            audioControl.current.loop = !loop;
          }}/> 
          : 
          <RepeatIcon fontSize='large' className='controls' onClick={() => {
            setLoop(!loop);
            audioControl.current.loop = !loop;
          }}/>
      }
      <SkipNextIcon fontSize='large' className='controls' onClick={() => {
        if (!loop) {
          if (currMusic === totalMusic - 1) {
            setMusic(0)
          } else {
            setMusic(currMusic + 1);
          }
          setPlaying(true);
        }
      }}/>
    </div>
  )
}

export default Control