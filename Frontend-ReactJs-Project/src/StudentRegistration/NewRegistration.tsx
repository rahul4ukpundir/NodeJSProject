import React from "react";
import "./NewRegistration.scss"
import {IStudentModel} from "./Model";

export class NewRegistration extends React.Component<IStudentModel, any>{
   constructor(props:any){
       super(props)
   }
   render() {
       return(
           <>
           <div>
               <label>Student Registration <br/></label>
           </div>
            <div>
                <label className="lblWidth">RollNo:</label>
                <input type="text" />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" />
            </div>
            <div>
                <label>DOB:</label>
                <input type="text" />
            </div> 
            <div>
                <label>Email:</label>
                <input type="text" />
            </div>  
            <div>
                <label>Father Name:</label>
                <input type="text" />
            </div>  
            <div>
                <label>Address Name:</label>
                <input type="text" />
            </div>      
            <div>
                <input type="submit" value="Register" />
           </div>
           </>
       )
   }     
   
}