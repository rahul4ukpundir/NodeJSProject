import HLSExample from './HLSExample';
import HLSExample1 from './HLSExample1';
import DASHExample from './DASHExample';
import AzureMediaPlayers from './AzureMediaPlayers'

const URLVideoStreaming=()=>{
    return(
        <div>
            Azure Media Player <br/>
            <AzureMediaPlayers />
            HLS Example <br/>
            {/* <HLSExample /> <br/>
            Dash Example <br />
            <DASHExample /> <br/> */}
         
        </div>
    )
}

export default URLVideoStreaming;