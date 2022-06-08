import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

const HLSExample =()=>{
    const ref = React.useRef(null);
    return (
        <div className="myApp">
          <div className="test"></div>
          <ReactHlsPlayer
                playerRef={ref}
                src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                autoPlay={true}
                muted={true}
                controls={true}
                width={500}
                height={300}
                hlsConfig={{
                  autoStartLoad: true,
                  startPosition: -1,
                  debug: false,
                
                }}
            />
        </div>
    
      );
}

export default HLSExample;