import { IUser } from "../Model/AuthenticationModel";
export class AuthService {

 Login=async(userName:string, password:string): Promise<IUser | undefined>=>{
       if(userName==="user" && password ==="1234"){
           return{
               userName: userName,
               email:"rahul4uk.pundir@gmail.com",
               phone: "9837267844"
           }
       }
       else{
           return undefined;
       }
    };
}