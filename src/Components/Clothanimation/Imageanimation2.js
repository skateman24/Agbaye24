import React from 'react';
import './Clothanimation.css';
import $ from 'jquery';

class Imageanimation2 extends React.Component {

    componentDidMount() {
        var container = document.querySelector("#jamf-container");
        var mover = document.querySelector("#jamf-mover");
        mover.style.backgroundSize = "contain";
        mover.style.backgroundPositionX = 0 + "px";
        mover.style.backgroundPositionY = 0 + "px";
        container.addEventListener("mousemove", function(e) {
            mover.style.backgroundSize = "";
          mover.style.backgroundPositionX = -e.offsetX * 1.8 + "px";
          mover.style.backgroundPositionY = -e.offsetY + 80 + "px";
        });
        
        
    }
    containerposition(e){
        var mover = document.querySelector("#jamf-mover");
          mover.style.backgroundPositionX = 0 + "px";
          mover.style.backgroundPositionY = 0 + "px";
          mover.style.backgroundSize = "contain";
    }
    render() {
        return (
            <div class="module-jamf" id="module-jamf">

                <div  class="jamf-container" id="jamf-container" onMouseLeave={(e) => this.containerposition(e)}>
                    <div class="jamf-mover" id="jamf-mover">
                    </div>
                </div>

            </div>
        );
    }
}

export default Imageanimation2;

