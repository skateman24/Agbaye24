import React from 'react';
import './Clothanimation.css';
import $ from 'jquery';

class Imageanimation1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       imageanimation: "rotateY(" + 0 + "deg)" + " " + "rotateX(" + -0 + "deg)"
    };

   
}

  componentDidMount() {
    this.resetposition()
  }
  resetposition() {

    $(".image").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + -0 + "deg)");
  }
  animationstyles(e) {
    var card = $(".card");
    var x = e.clientX - card.offset().left + $(window).scrollLeft();
      var y = e.clientY - card.offset().top + $(window).scrollTop();

      const map = (x, in_min, in_max, out_min, out_max) => {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }

      var rY = map(x, 0, card.width(), -18, 18);
      var rX = map(y, 0, card.height(), -18, 18);
      $(".image").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");

  }
  render() {
    return (
      <div id="mainWrapper">
        <div id="cardsWrapper">

          <div className="card" onMouseLeave={this.resetposition} onMouseMove={(e) => this.animationstyles(e)} >
            <div className="image first">
              <div className="screen"></div>
              <div className="text">
                <p>Mountain</p>
                <p>5 Days</p>
              </div>
            </div>
          </div>

          {/*<div className="card">
              <div className="image second">
                <div className="screen"></div>
                <div className="text">
                    <p>Island</p>
                    <p>2 Days</p>
                </div>
              </div>
            </div>*/}

        </div>
      </div>
    );
  }
}

export default Imageanimation1;