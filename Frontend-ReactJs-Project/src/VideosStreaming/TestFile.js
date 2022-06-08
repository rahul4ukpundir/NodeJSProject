import { AzureMP } from 'react-azure-mp'
const TestFile = () => {
  return (
    <div className="App" style={{ width: 500, height: 400 }}>
       <AzureMP
     skin="amp-flush"
     src={[{src: "http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest", type: "application/vnd.ms-sstr+xml" }]}
   />
    </div>
  );
};

export default TestFile;

// multi-lang audio url: //amssamples.streaming.mediaservices.windows.net/55034fb3-11af-43e4-a4de-d1b3ca56c5aa/ElephantsDream_MultiAudio.ism/manifest
