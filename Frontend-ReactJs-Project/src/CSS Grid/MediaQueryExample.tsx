import React from "react";
import "./CSSGridExample.scss";
class MediaQueryExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <div className="mediaQuery">
                Media Query Example.
            </div>
        )
    }
}

export default MediaQueryExample;