import { fireEvent,getByTestId,waitFor } from "@testing-library/react";
import React from "react";
import ReactDOM from 'react-dom';
import {Login} from '../TypeScriptExample/Login'
import {IUser} from '../Model/AuthenticationModel';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let wrapper:HTMLDivElement;
const someUser:IUser={
   userName:"someUser",
   email:"someEmail",
   phone:"phone"
}
let authServiceMock ={
    Login:jest.fn()
}

let setUserMock= jest.fn();
beforeEach(()=>{
  wrapper= document.createElement('div');
  document.body.appendChild(wrapper);
  ReactDOM.render( <Login authService={authServiceMock} setUsers={setUserMock} />, wrapper);
})

afterEach(()=>{
    document.body.removeChild(wrapper);
    wrapper.remove();
    jest.clearAllMocks();
})

describe("Login related test", ()=>{
    it("Login component render successfully", ()=>{
      expect(wrapper).toBeTruthy();
    })
    it("check the basic rendering", ()=>{
        // checking the document page.
        let heading = document.querySelector("h2");
        expect(heading?.textContent).toBe("This is Login Page.")
        
        // checking the count of input box in the page.
        let inputs = document.querySelectorAll("input");
        expect(inputs).toHaveLength(3);

        //checking label that does not exist
        let label = document.querySelector("label");
        expect(label).toBeInTheDocument()

        // checking initial value of text box  should be empty
        expect(inputs[0].value).toBe('');
        expect(inputs[1].value).toBe('');
        expect(inputs[2].value).toBe('Login');
    })
    it("event of basic component", ()=>{
        let inputs = document.querySelectorAll("input");
        //attach value after on change on text box
        fireEvent.change(inputs[0], {target: {value: 'user'}})
        fireEvent.change(inputs[1], {target: {value:'1234'}})

        //apply click event on Login button
        fireEvent.click(inputs[2]);
        expect(inputs[0].value).toBe('user');
        expect(inputs[1].value).toBe('1234');

        // check auth service parameter is fine or not
        expect(authServiceMock.Login).toBeCalledWith(
            'user',
            '1234'
        )       
    })
    it("login successfully", async()=>{
        authServiceMock.Login.mockResolvedValueOnce(someUser)
        let inputs = document.querySelectorAll("input");
        //attach value after on change on text box
        fireEvent.change(inputs[0], {target: {value: 'user'}})
        fireEvent.change(inputs[1], {target: {value:'1234'}})
        fireEvent.click(inputs[2]);
       // inputs[0].simulate('change', { target: { value: 'Hello' } })

        let statusLabel= await waitFor(()=>wrapper.querySelector("label"));
        expect(statusLabel).toBeInTheDocument();
        expect(statusLabel?.textContent).toBe('Login successfully');

        expect(setUserMock).toBeCalledWith(someUser)
    
    })
    it("login failed", async()=>{
        authServiceMock.Login.mockResolvedValueOnce(undefined)
        let inputs = document.querySelectorAll("input");
        //attach value after on change on text box
        fireEvent.change(inputs[0], {target: {value: 'user1'}})
        fireEvent.change(inputs[1], {target: {value:'1234'}})
        fireEvent.click(inputs[2]);

        let statusLabel= await waitFor(()=>wrapper.querySelector("label"));
        expect(statusLabel).toBeInTheDocument();
        expect(statusLabel?.textContent).toBe('No Login');

       
    
    })

    it.only("login checked by data-testid attribute", ()=>{
       let userNameTextBox= getByTestId(wrapper, "userName") as HTMLInputElement
       expect(userNameTextBox.value).toBe('');
    
    })
})