import React, { Component } from "react";
import Pickup from "./images/pickup.png";
import Discount from "./images/coupon.png";
import Savemoney from "./images/save-money.png";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";
import Pulse from "react-reveal/Pulse";
import MainImage from "./images/main-bg2.png";
import Mycar from "./images/my-car.svg";
import Correct from "./images/correct.svg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className='main-container flex-container'>
          <h1 className='big-title'>
            Nawab School Of <span style={{ color: "#604dd5" }}>Driving</span>{" "}
          </h1>
          <div className='flex-container'>
            <div className='main-title'>
              <img
                src={Correct}
                style={{ width: `19px`, paddingRight: `10px` }}
              ></img>
              <p> Male and Female Instructors</p>
            </div>
            <div className='main-title'>
              <img
                src={Correct}
                style={{ width: `19px`, paddingRight: `10px` }}
              ></img>
              <p> Comfortable Driving Lessons</p>
            </div>
            <div className='main-title'>
              <img
                src={Correct}
                style={{ width: `19px`, paddingRight: `10px` }}
              ></img>
              <p>Top driving School in Leicester</p>
            </div>
          </div>
          <div className='myButton'>
            <div className='flex-container'>
              <p>Book a Lesson</p>
              <p>07459775917</p>
            </div>
          </div>
          <div className='main-img-container'>
            <img src={Mycar}></img>
          </div>
        </div>
        <div className='main-container'></div>
      </div>
    );
  }
}

export default Home;
