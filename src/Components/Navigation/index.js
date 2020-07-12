import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navigation.css";
import Popup from '../Popup';
import Loginform from '../Loginform';
import Signupform from '../Signupform';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginscreen:false,
            loginform:true,
        };

        this.closeform = this.closeform.bind(this);
    }

    loginpopup(){
        this.setState({loginscreen:true})
    }
    handleformchange(formname){
        if(formname == "login"){
            this.setState({loginform:true,})
        }else{
            this.setState({loginform:false})
        }
        
    }
    closeform(){
        this.setState({loginscreen:false})
    }

    render() {
        return (
            <div className="navigationcontainer">
                <span>Agbaye24</span>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <div onClick={() => this.loginpopup()}>Login / Signup</div>
                </div>

                {this.state.loginscreen ? 
                <Popup closepopup ={this.closeform}>
                    <div>
                        <div>
                            <div onClick={() => this.handleformchange("login")}>Login</div>
                            <div  onClick={() => this.handleformchange("signup")}>Signup</div>
                        </div>
                        {this.state.loginform ? 
                            <Loginform />
                        :
                            <Signupform />
                        }
                    </div>
                </Popup>
                : null
                }
            </div>
        );
    }
}

export default Navigation;