import * as React from "react";
import dashjs from "dashjs";


const DASHExample=()=> {
 const videoEl = React.useRef(null);
  React.useEffect(() => {
    const htmlElemnt= document.getElementById("videoPlayer") as HTMLElement
    var url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";
    var player= dashjs.MediaPlayer().create();
    player.initialize(htmlElemnt, url, true);
  });

 return(
    <video width={500} height={450} ref={videoEl} id="videoPlayer" controls></video>
 )
}

export default DASHExample;
