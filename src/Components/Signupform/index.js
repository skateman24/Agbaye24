import React from 'react';
import "./Signup.css";
import { Redirect } from 'react-router-dom';

class Signupform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signupstatus: false,
            username:''
        };

        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    signup() {
        this.setState({ signupstatus: true })
    }
    handleChange(event) {
        this.setState({username: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username);
        event.preventDefault();
    }
    render() {
        if (this.state.signupstatus === true) {
            return <Redirect to='/home' />
        }

        return (
            <div className="signupcontainer">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div onClick={this.signup}> Go to After login</div>
            </div>
        );
    }
}

export default Signupform;