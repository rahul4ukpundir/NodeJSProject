import React from "react";
import {IUser} from '../Model/AuthenticationModel';
import { AuthService } from "../Service/AuthService";


interface LoginProps{
    authService:AuthService,
    setUsers:(user:IUser)=>void // for passing thd data from child to parent component
}

interface LoginState{
    userName: string,
    password:string,
    isLogin:boolean
}

interface CustomeEvent{
    target:HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState>{
    state: LoginState={
        userName:'',
        password:'',
        isLogin:false
    }
    constructor(props:any){
        super(props);
    }
    private setUserName =(event:CustomeEvent)=>{
       this.setState({userName:event.target.value})
    }
    private setPasswordName =(event:CustomeEvent)=>{
        this.setState({password:event.target.value})
     }
    handleClick=async()=>{
      const result= await this.props.authService.Login(this.state.userName, this.state.password);
      if(result){
          this.props.setUsers(result);
          this.setState({isLogin:true})
      } 
      else{
        this.setState({isLogin:false})
        console.log("nothig result");
      }
    }
    render(){
        let loginMessage: any;

        if(this.state.isLogin){
            loginMessage=<label>Login successfully</label>
        }
        else{
            loginMessage=<label>No Login</label>
        }
       return(
           <div>
               <h2>This is Login Page.</h2>
                <br/>
               User Name: <input data-testid="userName" type="text" value={this.state.userName}  onChange={e=>this.setUserName(e)}/> <br/>
               Password: <input data-testid="pwd" type="password" value={this.state.password} onChange={e=>this.setPasswordName(e)} /> <br/>
               <input type="button" onClick={this.handleClick} value="Login" />
               
               {loginMessage}
           </div>
       ) 
    }
}