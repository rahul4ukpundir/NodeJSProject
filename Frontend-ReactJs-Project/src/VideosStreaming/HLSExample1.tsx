import * as React from "react";
import Hls from "hls.js";

const HLSExample1=()=> {
  const [hls, setHls] = React.useState(new Hls());
  const videoEl = React.useRef(null);
  React.useEffect(() => {
    if (videoEl.current) {
      hls.attachMedia(videoEl.current);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(
          "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        );
      });
    }
    return () => {
      if (hls) {
        hls.destroy();
      }
      //setHls(null);
    };
  });

  return (
    <div className="App">
      <video ref={videoEl} controls width={1000} height={500} />
    </div>
  );
}

export default HLSExample1;
