import React, { useState } from 'react';
import Livestream from './components/Livestream';
import Box from './components/Box';
import OverlayForm from './components/OverlayForm';

const App = () => {
  const hlsStreamUrl = 'http://localhost:8080/hls/my-video.m3u8'; // Your HLS stream URL

  const [overlays, setOverlays] = useState([]);

    // Function to handle overlay submission
    const handleOverlaySubmit = (newOverlay) => {
        setOverlays((prevOverlays) => [...prevOverlays, newOverlay]);
    };

  return (
    <div className='w-full h-screen p-2'>
      <h1>Live Stream</h1>
      <div className='flex justify-center items-center bg-zinc-300 w-[50vw] h-[40vh] relative'>
        <Livestream streamUrl={hlsStreamUrl} overlays={overlays} />
      </div>
      
      <OverlayForm onSubmit={handleOverlaySubmit}/>
    </div>
  );
};

export default App;
