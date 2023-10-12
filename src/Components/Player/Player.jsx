import React, { useEffect, useRef, useState } from 'react';
import Details from '../Details/Details';
import './Player.css';
import { musicList } from '../../database/musics';
import Control from '../Controls/Control';
import Progress from '../Progress/Progress';



const Player = () => {

  const [currMusic, setCurrMusic] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef();


  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  });
  return (
    <div className='player'>
      <audio src={musicList[currMusic].file} ref={audioRef} />

      <div className="playerCard">

      <div className="detailContainer">
        <Details title={musicList[currMusic].title} artist={musicList[currMusic].artist} img={musicList[currMusic].cover} />
      </div>
      <Progress audioRef={audioRef}/>
      <Control totalMusic={musicList.length} currMusic={currMusic} setMusic={setCurrMusic} audioControl={audioRef} playing={isPlaying} setPlaying={setPlaying} />

      </div>
    </div>
  )
}

export default Player