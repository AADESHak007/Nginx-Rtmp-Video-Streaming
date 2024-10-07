import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import Box from './Box';

const Livestream = ({ streamUrl, title = " ",overlays }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (Hls.isSupported() && video) {
      const hls = new Hls();
      hls.loadSource(streamUrl); // Set HLS stream URL
      hls.attachMedia(video); // Attach HLS stream to video element
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play(); // Autoplay once the stream is ready
      });

      // Clean up on unmount
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // For browsers like Safari that natively support HLS
      video.src = streamUrl;
      video.play();
    }
  }, [streamUrl]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className='w-[50vw] h-[40vh] p-2'>
      <video className='h-full w-full object-cover object-center relative'
        ref={videoRef}
        onClick={handleVideoClick}
        controls={true} // Custom behavior for play/pause
        autoPlay
        muted
      />
      <Box overlays={overlays} />
      <h2>
        <span style={{ border: '1px solid red', padding: '2px 10px' }}>Live</span> {title}
      </h2>
    </div>
  );
};

export default Livestream;
