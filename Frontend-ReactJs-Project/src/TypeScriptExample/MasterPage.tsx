import React from "react";
import { IUser } from "../Model/AuthenticationModel";
import { AuthService } from "../Service/AuthService";
import {Login} from './Login';

interface MasterPageState{
    user:IUser
}

export class MasterPage extends React.Component<{},MasterPageState>  {
    private authSeviceInstance:AuthService =new AuthService();
    constructor(props:any) {
        super(props);
        this.setUser=this.setUser.bind(this);
    }
    setUser =(user:IUser)=>{
        this.setState({
            user:user
        })
        console.log("sfd"+user);
    }

    render() {
        return(
          <Login authService={this.authSeviceInstance} setUsers={this.setUser} />
        )
    }
}