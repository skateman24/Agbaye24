import React from 'react';
import "./Popup.css";


class Popup extends React.Component {
    render() {
        return (
            <div className="popupcontainer">
                <div className="popupbody">
                    <div className="popupclose" onClick={this.props.closepopup}>X</div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Popup;