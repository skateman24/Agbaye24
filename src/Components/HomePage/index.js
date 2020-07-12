import React from 'react';
import Navigation from '../Navigation';
import {connect} from 'react-redux'


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>HomePage sample</h1>
                    <p>HomePage page body content</p>
                </div>
                {this.props.userdetails.name}
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


