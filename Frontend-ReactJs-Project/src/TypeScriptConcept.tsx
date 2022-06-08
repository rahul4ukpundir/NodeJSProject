import React from "react";

interface Users{
    name: string,
    id:number
}

class TypeScriptConcept extends React.Component<any,any>{
    name="Rahul Pundir";
    
    constructor(props:any){
        super(props);
    }
    setName =()=>{
       let user:Users = {
            name: "Hayes",
            id: 0,
          }
        let name:string = user.name;
        return name;
        
    }
    render(){
        return(
            <div>This is first Typescript file {this.name} {this.setName()}
            {}
            </div>
        )
    }
}

export default TypeScriptConcept;