import React, {RefObject} from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import ReactHlsPlayer from 'react-hls-player';

function App() {;
  const inputEl = React.useRef(null);
  return (
    <div className="myApp">
      <div className="test"></div>
      <ReactHlsPlayer
            playerRef={inputEl}
            src="https://amssamples.streaming.mediaservices.windows.net/2e91931e-0d29-482b-a42b-9aadc93eb825/AzurePromo.mp4"
            autoPlay={true}
            muted={true}
            controls={true}
            width="100%"
            height="auto"
        />
      {/* <ReactPlayer  playing={true} muted={true} controls url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" />
      <ReactPlayer  playing={true} muted={true} controls url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" />
      <ReactPlayer  playing={true} muted={true} controls url="https://www.youtube.com/watch?v=T0i0zHyryrs" />
      <ReactPlayer  playing={true} muted={true} controls url="http://samplescdn.origin.mediaservices.windows.net/e0e820ec-f6a2-4ea2-afe3-1eed4e06ab2c/AzureMediaServices_Overview.ism/manifest" />
      <ReactPlayer  playing={true} muted={true} controls url="http://techslides.com/demos/sample-videos/small.webm" /> */}
    </div>

  );
 
}

export default App;
