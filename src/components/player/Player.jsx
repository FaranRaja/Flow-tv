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
      
      
      <div className="stream">
            <video ref={videoRef} controls width="1200" />
      </div>


    <div className="content">
      <div className="channel-logo">
        <img src="https://cdn.dribbble.com/userupload/4941237/file/still-418f75c4e8ab72a58728ae827d374279.gif" alt="" className='channel-logo-img'/>
      </div>

      <div className="channel-content">
        <h4>Red Bull TV</h4>
        <h5>LIVE</h5>
        <span>Sports & Entertainment</span>
      </div>
      </div>
      
    </div>
  );
}

export default Player
