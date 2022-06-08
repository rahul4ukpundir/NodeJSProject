import AzureMediaPlayer from "./AzureMediaPlayer";
import React from "react";

interface MasterPageState{
  fn:any
}
export default class AzureMediaPlayers extends React.Component<{}, MasterPageState> {
  constructor(props:any){
    super(props);
    this.state={
      fn:null
    }
  }
  componentDidMount(){
    debugger;
    if(window.amp){
      debugger;
      if(this.state.fn?.player_?.isReady_){
        alert("i am in")
      }
    }
  }
   setForwordVideos =(forword:any)=>{
    this.setState(
      {fn:forword}
     )
  }

  handleForword=()=>{
     this.state.fn.player_.currentTime(this.state.fn.player_.currentTime()+10)
    console.log( this.state.fn.player_.currentTime())
  }
  handleBackword=()=>{
    this.state.fn.player_.currentTime(this.state.fn.player_.currentTime()-5)
   console.log( this.state.fn.player_.currentTime())
 }
  createForwordButton =()=>{
    var iDiv = document.createElement('button');
    iDiv.id = 'block';
    iDiv.className = 'btnForword  vjs-control vjs-button outline-enabled-control';
    document.getElementsByClassName('amp-controlbaricons-left')[0].appendChild(iDiv);

    // Now create and append to iDiv
    var innerDiv = document.createElement('span');
    innerDiv.className = 'block-2';
    innerDiv.textContent="&#8249";

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);
    document.getElementsByClassName('btnForword')[0].addEventListener('click', this.handleForword);
  }

  createBackwordButton =()=>{
    var iDiv = document.createElement('button');
    iDiv.id = 'block';
    iDiv.className = 'btnBackword vjs-control vjs-button outline-enabled-control';
    document.getElementsByClassName('amp-controlbaricons-left')[0].appendChild(iDiv);

    // Now create and append to iDiv
    var innerDiv = document.createElement('span');
    innerDiv.className = 'block-2';
    innerDiv.textContent="&#8250";

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);
  }
   handleClick =()=>{
     if(window.amp){ 
       this.createForwordButton();
       this.createBackwordButton();
     const fnForword1:any= this.state.fn.player_.player_.currentTime(this.state.fn.player_.currentTime(),10)
    debugger;
     document.getElementsByClassName('btnForword')[0].addEventListener('click', this.handleForword);
    document.getElementsByClassName('btnBackword')[0].addEventListener('click', this.handleBackword);
    
  }

}
render() {
  return (
    <div className="App">
      <AzureMediaPlayer
       play={this.handleClick}
    
       setForwordVideos={this.setForwordVideos}
        options={{
          
          controls: true,
          autoplay: false,
          width:500,
          height:400,
          playbackSpeed: {
            enabled: true,
            initialSpeed: 1.0,
            speedLevels: [
              { name: "x4.0", value: 4.0 },
              { name: "x3.0", value: 3.0 },
              { name: "x2.0", value: 2.0 },
              { name: "x1.75", value: 1.75 },
              { name: "x1.5", value: 1.5 },
              { name: "x1.25", value: 1.25 },
              { name: "normal", value: 1.0 },
              { name: "x0.75", value: 0.75 },
              { name: "x0.5", value: 0.5 },
            ],
          },
        
        }}
        skin="amp-default"
        src={[
          {
            src: "//amssamples.streaming.mediaservices.windows.net/55034fb3-11af-43e4-a4de-d1b3ca56c5aa/ElephantsDream_MultiAudio.ism/manifest",
            type: "application/vnd.ms-sstr+xml"
          },
        ]}
      />
      <br/>
      <div>
        <button onClick={()=>this.handleClick()} >Play Video</button></div>
    </div>
  );
}
}



