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
import Noextra from "./images/noextra.svg";
import DiscountBlock from "./images/discount.svg";
import Door from "./images/door.svg";

class Home extends Component {
  render() {
    return (
      <div>
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
        </div>
        <div className='section2 '>
          <div className='medium-title'>
            {" "}
            <h1>A better way to </h1>
            <h1>learn to drive you car</h1>
          </div>
          <div className='flex-container box-container'>
            <div className='box flex-container flex-box-container'>
              {" "}
              <img src={Door}></img>
            </div>
            <div className='box flex-container flex-box-container box-2'>
              <h1 style={{ textAlign: `center` }}>Door to door service</h1>
              <p style={{ textAlign: `center` }}>
                We provide pick and drop service from your home
              </p>
            </div>
          </div>
          <div className='flex-container box-container'>
            <div className='box flex-container flex-box-container'>
              <img src={DiscountBlock}></img>
            </div>
            <div className='box flex-container flex-box-container box-2'>
              <h1 style={{ textAlign: `center` }}> Block booking discount</h1>
              <p style={{ textAlign: `center` }}>
                Book a slot of 5 hours, 10 hours or 20 hours and get a special
                discount
              </p>
            </div>
          </div>
          <div className='flex-container box-container'>
            <div className='box flex-container flex-box-container '>
              {" "}
              <img src={Noextra}></img>
            </div>
            <div className='box flex-container flex-box-container box-2'>
              <h1 style={{ textAlign: `center` }}>
                No extra cost for weekends
              </h1>
              <p style={{ textAlign: `center` }}>
                No need to worry about the extra charges on weekend lessons, you
                can get your lessons as same price as weekday.
              </p>
            </div>
          </div>
        </div>
        <div className='flex-container section-3'>
          <h1>
            Our driving school is a pupil focused school. Driving instructors
            are fully DVSA qualified and Approved Driving Instructors (ADI’s)
            and provide a professional and courteous service.
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
