import * as React from "react"
import { RefObject } from "react";
import loadLibrary from './load-library';
import './mp-component.css'
import test from '../../src/Images/test.png';

const DEFAULT_SKIN = "amp-flush";
const DEFAULT_RATIO = [16, 9];
const DEFAULT_OPTIONS = {
    controls: true,
    autoplay: false,
    muted: true,
    logo: {
      enabled: false
    },
  };

declare const window: any;
export interface IVideoPlayerProps {
  readonly src: { src: string, type: string ;}[];
  readonly options: any;
  readonly skin: string;
  readonly className: string;
  readonly adaptRatio: Array<number>;
  readonly play:any;
  setForwordVideos:(setting:any)=>void
}
 class AzureMediaPlayer extends React.PureComponent<IVideoPlayerProps, {}> {
  public static defaultProps = {
    skin: DEFAULT_SKIN,
    className: "",
    adaptRatio: DEFAULT_RATIO,
    options: DEFAULT_OPTIONS,
  }

  videoNode: RefObject<any>;
  player: any;
  initialization: any;

  constructor(props: IVideoPlayerProps) {
    super(props);
    this.videoNode = React.createRef();
  }

  componentWillUnmount() {
    this._destroyPlayer();
  }

  componentDidMount() {
    const { skin } = this.props;
    this.initialization = loadLibrary(skin).then(() => {
      this._createPlayer()
      this._setVideo();
    })
  }

  componentDidUpdate(prevProps: IVideoPlayerProps) {
    if (prevProps.src !== this.props.src) {
      this.initialization.then(() => this._setVideo());
    }
  }

  _destroyPlayer() {
    this.player && this.player.dispose();
  }

  _setVideo() {
    const { src } = this.props;
    this.player.src(src);
  }
  createForwordButton =()=>{
    if(document.getElementsByClassName('btnForword')?.length==0){
    var iDiv = document.createElement('button');
    iDiv.id = 'block';
    iDiv.className = 'btnForword  vjs-control vjs-button outline-enabled-control';
    document.getElementsByClassName('amp-controlbaricons-left')[0]?.appendChild(iDiv);

    // Now create and append to iDiv
    var innerDiv = document.createElement('span');
    innerDiv.className = 'block-2';
    innerDiv.textContent="››";
    innerDiv.title="Forword"

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);
    document.getElementsByClassName('btnForword')[0].addEventListener('click', this.handleForword);
  }
  }

  setQuality =()=>{
    let item= document?.querySelector(".amp-quality-control .vjs-menu ul")?.getElementsByClassName("amp-menu-item");
    if(item && item.length>0){
    for(let i=0;i<item?.length; i++){
      console.log(item[i].ariaLabel);
    }
  }
  }
  createBackwordButton =()=>{
    if(document.getElementsByClassName('btnBackword')?.length==0){
    var iDiv = document.createElement('button');
    iDiv.id = 'block';
    iDiv.className = 'btnBackword vjs-control vjs-button outline-enabled-control';
    document.getElementsByClassName('amp-controlbaricons-left')[0]?.appendChild(iDiv);

    // Now create and append to iDiv
    var innerDiv = document.createElement('span');
    innerDiv.className = 'block-2';
    innerDiv.textContent="‹‹";
    innerDiv.title="Backword"

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);
    document.getElementsByClassName('btnBackword')[0].addEventListener('click', this.handleBackword);
    }
  }
  handleForword=()=>{
    this.player.currentTime(this.player.currentTime()+10);

 }
 handleBackword=()=>{
   this.player.currentTime(this.player.currentTime()-5)
  
}

  handleOnReady=(player:any)=>{
    if(player?.isReady_){
      debugger;
    //  document.getElementsByClassName("amp-big-play-centered")[0].addEventListener('click',this.clickme)
    this.createBackwordButton();   
    this.createForwordButton();
    this.setQuality();
      
    }
  }
  _createPlayer() {
    //if you want use directly id then you can use below commented lines
    //const htmlElemnt= document.getElementById("azuremediaplayer") as HTMLElement
    //this.player = window.amp(htmlElemnt, this.props.options);
    this.player = window.amp(this.videoNode.current, this.props.options);
    this.player.on("ready", () => console.log("calling"));
    this.player.on("play", () =>  this.handleOnReady(this.player));

    window.amp.plugin('hotkeys', this.handleHotKeys(Option));
    this.forwordVideos();
    //All events are avaialble in the below URL
    //https://docs.microsoft.com/en-us/javascript/api/azuremediaplayer/amp.eventname?view=azure-node-latest
  }

   playVideo =()=>{
    this.player = window.amp(this.videoNode.current, this.props.options);
    this.player.Play();
  
  }

  forwordVideos=()=>{
    this.props.setForwordVideos(this.player.currentTime(this.player.currentTime() + 15));
  }

  handleHotKeys =(player:any)=>{
        var def_options = {
            volumeStep: 0.1,
            seekStep: 5,
            enableMute: true,
            enableFullscreen: true,
            enableNumbers: true,
            enableJogStyle: false
        };
        
    debugger;
  }

  getRatioStyles(ratio:any) {
    if (!ratio) {
      return {}
    }
    return { paddingBottom: (ratio[1] / ratio[0]) * 100 + '%' }
  }

   
 
   dataSetupOption ={
    "logo":{
      "enabled":false
    },
    "language":"en",
    "techOrder":["azureHtml5JS", "flashSS", "silverlightSS", "html5"],
    "nativeControlsForTouch":false
  }

  render() {
    return (  
      <div>
          <div >
          <video
          poster={test}
            tabIndex={0}
            id="azuremediaplayer"
            className="azuremediaplayer amp-flush amp-default-skin amp-big-play-centered"
           // data-setup={JSON.stringify(this.dataSetupOption)}
           data-setup='{"protectionInfo": [{"type": "AES", "authenticationToken": "Bearer=urn%3amicrosoft%3aazure%3amediaservices%3acontentkeyidentifier=8130520b-c116-45a9-824e-4a0082f3cb3c&Audience=urn%3atest&ExpiresOn=1450207516&Issuer=http%3a%2f%2ftestacs.com%2f&HMACSHA256=eV7HDgZ9msp9H9bnEPGN91sBdU7XsZ9OyB6VgFhKBAU%3d"}]}'
            ref={this.videoNode}
         >
          </video>
        </div>
      
      </div>
    );
  }
}

export default AzureMediaPlayer;