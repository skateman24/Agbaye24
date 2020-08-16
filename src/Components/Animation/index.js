import React from 'react';
import { connect } from 'react-redux';
import './Animation.css';


class Animation extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Animation sample</h1>
                    <p>Animation page body content</p>
                    <div>
                        <div>
                            <img id="loading" src="http://www.vitorazevedo.net/external_files/loading_small.png" />
                        </div>
                        <div className="stage" style={{width: "120px", height: "120px"}}>
                            <div className="cubespinner">
                                <div className="face1">1</div>
                                <div className="face2">2</div>
                                <div className="face3">3</div>
                                <div className="face4">4</div>
                                <div className="face5">5</div>
                                <div className="face6">6</div>
                            </div>
                        </div>
                        <div style={{width: "120px", height: "120px"}}>
                            <div className="coin">
                                <div className="coin_face1">1</div>
                                <div className="coin_face2">2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        userdetails: state.UserDetails.userdetails,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Animation)


