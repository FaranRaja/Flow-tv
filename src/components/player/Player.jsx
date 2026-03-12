import React from 'react'
import Hls from "hls.js";
import { useRef, useEffect } from "react";
import Nav from '../landing/Nav'


const Player = () => {
  const videoRef = useRef(null);

  useEffect(() => {

    const video = videoRef.current;

    const streamUrl = "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
    } 
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
    }

  }, []);

  return (
    <div className='player'>
      <Nav />
      <div className="stream">
            <video ref={videoRef} controls width="1200" />
      </div>
      
    </div>
  );
}

export default Player
