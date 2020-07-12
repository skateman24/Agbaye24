import React from 'react';
import "./Signup.css";
import { Redirect } from 'react-router-dom';
import {saveuserdetail} from '../../redux';
import {connect} from 'react-redux'
import moment from 'moment';

class Signupform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signupstatus: false,
            username:'',
            emailid:'',
            password:'',
            confirmpassword:'',
            mobilenumber:'',
            location:'',
            age:'',
        };

        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    signup() {
        this.setState({ signupstatus: true })
    }
    handleChange(event) {
        console.log("name",event.target.name,"----value--",event.target.value,"-------",this.state)
        var name = event.target.name
        this.setState({[name]: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username);
        event.preventDefault();
        var details = {
            name: this.state.username
        }
        localStorage.setItem('document',JSON.stringify(details));
        this.props.saveuserdetail( details )
        this.setState({ signupstatus: true })
    }
    setdate(date){
        console.log("date---", moment(date).format("DD-MM-YYYY"))
        this.setState({age:moment(date).format("DD-MM-YYYY") });
    }
    render() {
        if (this.state.signupstatus === true) {
            return <Redirect to='/home' />
        }

        return (
            <div className="signupcontainer">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>User Name: </div>
                        <div>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>Email: </div>
                        <div>
                            <input type="text" name="emailid" value={this.state.emailid} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>Password: </div>
                        <div>
                            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>Confirm Password: </div>
                        <div>
                            <input type="text" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>Mobile Number: </div>
                        <div>
                            <input type="text" name="mobilenumber" value={this.state.mobilenumber} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>Location: </div>
                        <div>
                            <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>Age: </div>
                        <div>
                            <input  name="age"  type="date" format="DD-MM-YYYY"
                            
                            onChange={(date)=>this.setdate(date) } />              
                        </div>
                    </div>
                   
                    <input type="submit" value="Submit" />
                </form>
                <div onClick={this.signup}> Go to After login</div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return{
        userdetails : state.UserDetails.userdetails,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        saveuserdetail : (details) => dispatch(saveuserdetail(details))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signupform)

